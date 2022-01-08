const router = require('express').Router();
const sequelize = require('../config/connection');
const { Ticket, User, Comment, Priority, StatusChange, Type, Role} = require('../models');
const withAuth = require('../utils/auth');
var fs = require('fs');


// get all Tickets for priority
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
          attributes: ['username', 'role_id'],
          include: {
            model: Role,
            attributes: ['role']
          },
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
<<<<<<< HEAD
      res.render('priority', { tickets, loggedIn: true, user_username: req.session.username });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:priority_id', withAuth, (req, res) => {
  console.log('======================');
  Ticket.findAll({
    where: {
      priority_id: req.params.priority_id
    },
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
          attributes: ['username'],
          include: {
            model: Role,
            attributes: ['role']
          },
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

      res.render('priority', {
        tickets,
        loggedIn: req.session.loggedIn,
        user_username: req.session.username
=======
      fs.writeFile('./public/data.json', JSON.stringify(tickets),(err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully!");
        }
>>>>>>> feature/paginated
      });
      res.render('priority', { tickets, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;
