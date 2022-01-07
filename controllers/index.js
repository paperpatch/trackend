const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const priorityRoutes = require('./priority-routes.js');
const allTicketsRoutes = require('./all-tickets-routes');
const createTicketRoutes = require('./create-ticket-routes.js');
const manageRoutes = require('./manage-routes');
const profileRoutes = require('./profile-routes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/priority', priorityRoutes);
router.use('/all', allTicketsRoutes);
router.use('/create-ticket', createTicketRoutes);
router.use('/manageusers', manageRoutes);
router.use('/profile', profileRoutes);

module.exports = router;
