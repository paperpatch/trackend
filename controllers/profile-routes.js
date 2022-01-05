const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');
const withAuth = require('../utils/auth');

// get all Tickets for dashboard
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  User.findAll({
    where: {
      user_id: req.session.id
    },
    attributes: [
      'id',
      'username',
      'email',
      'password',
      'role_id',
    ],
  })
    .then(dbTicketData => {
      const tickets = dbTicketData.map(ticket => ticket.get({ plain: true }));
      res.render('profile-setting', { tickets, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;