const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Ticket, User, Comment, Priority, StatusChange, Type, Role} = require('../../models');
const withAuth = require('../../utils/auth');

// get all users
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
        },
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
        mode: Priority,
        attributes: ['level']
      },
      {
        mode: StatusChange,
        attributes: ['statusChange']
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
        },
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
        mode: Priority,
        attributes: ['level']
      },
      {
        mode: StatusChange,
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
    user_id: req.session.user_id
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
      status: req.body.status
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
