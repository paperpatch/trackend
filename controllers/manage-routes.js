const router = require('express').Router();
const sequelize = require('../config/connection');
const { Ticket, User, Comment, Priority, StatusChange, Type, Role} = require('../models');
const withAuth = require('../utils/auth');

// get all Users for Managing Users
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Ticket.findAll({
    // where: {
    //   user_id: req.session.user_id
    // },
    attributes: [
      'id',
      'ticket_text',
      'title',
      'status',
      'priority_id',
      'status_change_id',
      'type_id',
      'assigned_id',
      'created_at',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'ticket_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        as: 'user',
        attributes: ['username', 'role_id',],
        include: {
          model: Role,
          attributes: ['role']
        }
      },
      {
        model: User,
        as: 'assign',
        attributes: ['username'],
      },
      {
        model: Priority,
        attributes: ['level'],
      },
      {
        model: StatusChange,
        attributes: ['statusChange'],
      },
      {
        model: Type,
        attributes: ['type'],
      },
    ]
  })
    .then(dbTicketData => {
      const tickets = dbTicketData.map(ticket => ticket.get({ plain: true }));
      res.render('manage-users', { tickets, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;