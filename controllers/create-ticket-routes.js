const router = require('express').Router();
const sequelize = require('../config/connection');
const { Ticket, User, Comment, Priority, StatusChange, Type, Role} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    res.render('create-ticket', { loggedIn: true });
});

module.exports = router;