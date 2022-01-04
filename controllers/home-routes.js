const router = require('express').Router();
const sequelize = require('../config/connection');
const { Ticket, User, Comment, Priority, StatusChange, Type, Role} = require('../models');
const withAuth = require('../utils/auth');

// get all Tickets for homepage
router.get('/', withAuth, (req, res) => {
  console.log('======================');
  Ticket.findAll({
    attributes: [
      'id',
      'ticket_text',
      'title',
      'status',
      'priority_id',
      'status_change_id',
      'type_id',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM ticket WHERE ticket.priority_id = 1)'), 'critical_count'],
      [sequelize.literal('(SELECT COUNT(*) FROM ticket WHERE ticket.priority_id = 2)'), 'high_count'],
      [sequelize.literal('(SELECT COUNT(*) FROM ticket WHERE ticket.priority_id = 3)'), 'moderate_count'],
      [sequelize.literal('(SELECT COUNT(*) FROM ticket WHERE ticket.priority_id = 4)'), 'low_count'],
    ],
    order: [['created_at', 'DESC']],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'ticket_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username', 'role_id'],
          include: {
            model: Role,
            attributes: ['role']
          },
        },
      },
      {
        model: User,
        attributes: ['username', 'role_id'],
        include: {
          model: Role,
          attributes: ['role']
        },
      },
      {
        model: Priority,
        attributes: ['level']
      },
      {
        model: StatusChange,
        attributes: ['statusChange']
      },
      {
        model: Type,
        attributes: ['type']
      },
    ]
  })
    .then(dbTicketData => {
      const tickets = dbTicketData.map(ticket => ticket.get({ plain: true }));

      res.render('homepage', {
        tickets,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single ticket
router.get('/ticket/:id', withAuth, (req, res) => {
  Ticket.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'ticket_text',
      'title',
      'status',
      'priority_id',
      'status_change_id',
      'type_id',
      'created_at',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'ticket_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
          include: {
            model: Role,
            attributes: ['role']
          },
        },
      },
      {
        model: User,
        attributes: ['username'],
        include: {
          model: Role,
          attributes: ['role']
        },
      },
      {
        model: Priority,
        attributes: ['level']
      },
      {
        model: StatusChange,
        attributes: ['statusChange']
      },
      {
        model: Type,
        attributes: ['type']
      },
    ]
  })
    .then(dbTicketData => {
      if (!dbTicketData) {
        res.status(404).json({ message: 'No ticket found with this id' });
        return;
      }

      const ticket = dbTicketData.get({ plain: true });

      res.render('single-ticket', {
        ticket,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
})

module.exports = router;
