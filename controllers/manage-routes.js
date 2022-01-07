const router = require('express').Router();
const sequelize = require('../config/connection');
const { Ticket, User, Comment, Priority, StatusChange, Type, Role} = require('../models');
const withAuth = require('../utils/auth');

// get all Users for Managing Users
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  User.findAll({
    where: {
      id: req.session.user_id
    },
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
    .then(dbProfileData => {
      const profile = dbProfileData.map(profile => profile.get({ plain: true }));
      res.render('manage-users', { profile, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;