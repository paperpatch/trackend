const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');
const withAuth = require('../utils/auth');

// get all Profile data
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
  })
    .then(dbProfileData => {
      const profile = dbProfileData.map(profile => profile.get({ plain: true }));
      res.render('profile', { profile, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;