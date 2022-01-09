const router = require('express').Router();
const sequelize = require('../config/connection');
const { Ticket, User, Comment, Priority, StatusChange, Type, Role} = require('../models');
const withAuth = require('../utils/auth');

router.get('/:id', withAuth, (req, res) => {
    User.findAll({
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
        .then(dbUserData => {
            const users = dbUserData.map(user => user.get({plain:true}));
            res.render('edit-ticket', { users, loggedIn: true, user_username: req.session.username });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;