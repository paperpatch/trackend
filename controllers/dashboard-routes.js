const router = require('express').Router();
const sequelize = require('../config/connection');
const {
  Ticket,
  User,
  Comment,
  Priority,
  StatusChange,
  Type,
  Role
} = require('../models');
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
        'priority_id',
        'status_change_id',
        'type_id',
        'assigned_id',
        'created_at',
        'due_date',
      ],
      include: [{
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
          attributes: ['username', 'role_id', ],
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
      const tickets = dbTicketData.map(ticket => ticket.get({
        plain: true
      }));
      res.render('dashboard', {
        tickets,
        loggedIn: true,
        user_username: req.session.username
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
  User.findAll({
    attributes: ['id', 'username']
  })
  .then(allUsers => {
    const plainAllUsers = allUsers.map(user => user.get({
      plain: true
    }));
    return plainAllUsers;
  })
  .then(users => {
    Ticket.findByPk(req.params.id, {
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
          'due_date',
        ],
        include: [{
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
            as: 'user',
            attributes: ['username', 'role_id'],
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
        // const users = newUsers;
        if (dbTicketData) {
          // const users = dbTicketData[0].get({plain:true});
          const ticket = dbTicketData.get({
            plain: true
          });

          res.render('edit-ticket', {
            users,
            ticket,
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
  })
  .catch(err => {
    res.status(500).json(err);
  });
  // Ticket.findByPk(req.params.id, {
  //   attributes: [
  //     'id',
  //     'ticket_text',
  //     'title',
  //     'status',
  //     'priority_id',
  //     'status_change_id',
  //     'created_at',
  //     'due_date',
  //   ],
  //   include: [
  //     {
  //       model: Comment,
  //       attributes: ['id', 'comment_text', 'ticket_id', 'user_id', 'created_at'],
  //       include: {
  //         model: User,
  //         attributes: ['username', 'role_id'],
  //         include: {
  //           model: Role,
  //           attributes: ['role']
  //         },
  //       },
  //     },
  //     {
  //       model: User,
  //       as: 'user',
  //       attributes: ['username', 'role_id'],
  //       include: {
  //         model: Role,
  //         attributes: ['role']
  //       }
  //     },
  //     {
  //       model: User,
  //       as: 'assign',
  //       attributes: ['username'],
  //     },
  //     {
  //       model: Priority,
  //       attributes: ['level']
  //     },
  //     {
  //       model: StatusChange,
  //       attributes: ['statusChange']
  //     },
  //     {
  //       model: Type,
  //       attributes: ['type']
  //     },
  //   ]
  // })
  //   .then(dbTicketData => {
  //     if (dbTicketData) {
  //       console.log('===========================================');
  //       const ticket = dbTicketData.get({plain:true});
  //       res.render('edit-ticket', {
  //         ticket,
  //         loggedIn: true,
  //         user_username: req.session.username
  //       });
  //     } else {
  //       res.status(404).end();
  //     }
  //   })
  //   .catch(err => {
  //     res.status(500).json(err);
  //   });  
});

module.exports = router;