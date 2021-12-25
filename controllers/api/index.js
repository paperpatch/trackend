const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const ticketRoutes = require('./ticket-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/tickets', ticketRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
