const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Role} = require('../models');
const withAuth = require('../utils/auth');

// get all Users for Managing Users
router.get('/', withAuth, (req, res) => {
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
      res.render('manage-users', { user, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;