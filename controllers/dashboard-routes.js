const router = require('express').Router();
const sequelize = require('../config/connection');
const { Ticket, User, Comment, /* Priority, StatusChange */} = require('../models');
const withAuth = require('../utils/auth');

// get all Tickets for dashboard
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Ticket.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'ticket_text',
      'title',
      'status',
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
        attributes: ['username']
      },
      // {
      //   model: Priority,
      //   attributes: ['level']
      // },
      // {
      //   model: StatusChange,
      //   attributes: ['statusChange']
      // },
    ]
  })
    .then(dbTicketData => {
      const tickets = dbTicketData.map(ticket => ticket.get({ plain: true }));
      res.render('dashboard', { tickets, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
  Ticket.findByPk(req.params.id, {
    attributes: [
      'id',
      'ticket_text',
      'title',
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
        attributes: ['username']
      },
      // {
      //   model: Priority,
      //   attributes: ['level']
      // },
      // {
      //   model: StatusChange,
      //   attributes: ['statusChange']
      // },
    ]
  })
    .then(dbTicketData => {
      if (dbTicketData) {
        const ticket = dbTicketData.get({ plain: true });
        
        res.render('edit-ticket', {
          ticket,
          loggedIn: true
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
