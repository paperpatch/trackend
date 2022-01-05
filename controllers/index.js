const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const priorityRoutes = require('./priority-routes.js');
const ticketsRoutes = require('./tickets-routes');
const createTicketRoutes = require('./create-ticket-routes.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/priority', priorityRoutes);
router.use('/tickets', ticketsRoutes);
router.use('/create-ticket', createTicketRoutes);

module.exports = router;
