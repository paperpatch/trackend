const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Ticket, User, Comment, Priority, StatusChange, Type, Role } = require('../../models');
const withAuth = require('../../utils/auth');

// get api tickets
router.get('/', (req, res) => {
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
      'assigned_id',
      'created_at',
      'due_date',
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
        attributes: ['type'],
      },
    ]
  })
    .then(dbTicketData => res.json(dbTicketData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  User.findAll({
    // where: {
    //   user_id: req.session.user_id
    // },
    attributes: [
      'id',
      'username'
    ],
    include: {
      model: Ticket,
      // where: req.params.id,
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
    }
  })
    .then(dbTicketData => {
      if (!dbTicketData) {
        res.status(404).json({ message: 'No ticket found with this id' });
        return;
      }
      const users = dbTicketData.map(user => user.get({plain:true}));
      // const user = users.find(user => user.id === 2);
      // const ticket = user.tickets.find(ticket => ticket.id === 2);
      // console.log(ticket);
      // console.log(users);
      res.json(dbTicketData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  Ticket.create({
    title: req.body.title,
    ticket_text: req.body.ticket_text,
    status: true,
    user_id: req.session.user_id,
    priority_id: req.body.priority_id,
    status_change_id: 1,
    type_id: req.body.type_id,
    assigned_id: req.body.assigned_id
  })
    .then(dbTicketData => res.json(dbTicketData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Ticket.update(
    {
      title: req.body.title,
      ticket_text: req.body.ticket_text,
      status: req.body.status,
      user_id: req.session.user_id,
      priority_id: req.body.priority_id,
      status_change_id: 2,
      type_id: req.body.type_id,
      assigned_id: req.body.assigned_id
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbTicketData => {
      if (!dbTicketData) {
        res.status(404).json({ message: 'No Ticket found with this id' });
        return;
      }
      res.json(dbTicketData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Ticket.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbTicketData => {
      if (!dbTicketData) {
        res.status(404).json({ message: 'No ticket found with this id' });
        return;
      }
      res.json(dbTicketData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
