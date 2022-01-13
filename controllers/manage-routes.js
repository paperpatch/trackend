const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Role} = require('../models');
const withAuth = require('../utils/auth');
const authAdmin = require('../utils/authAdmin');

// get all Users for Managing Users
router.get('/', withAuth, authAdmin, (req, res) => {
  console.log(req.session);
  console.log('======================');
  User.findAll({
    attributes: [
      'id',
      'username',
      'email',
      'password',
      'role_id',
    ],
    include: {
      model: Role,
      attributes: ['role']
    }
  })
    .then(dbUserData => {
      const user = dbUserData.map(user => user.get({ plain: true }));
      res.render('manage-users', { user, loggedIn: true, user_username: req.session.username });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', withAuth, authAdmin, (req, res) => {
  User.findByPk(req.params.id, {
    attributes: [
      'id',
      'username',
      'email',
      'password',
      'role_id',
    ],
    include: {
      model: Role,
      attributes: ['role']
    },
  })
    .then(dbUserData => {
      if (dbUserData) {
        console.log('===========================================');
        const user = dbUserData.get({plain:true});
        res.render('user-profile', {
          user,
          loggedIn: true,
          user_username: req.session.username
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });  
});

module.exports = router;