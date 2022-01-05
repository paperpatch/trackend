const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const priorityRoutes = require('./priority-routes.js');
const ticketsRoutes = require('./tickets-routes');
const manageRoutes = require('./manage-routes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/priority', priorityRoutes);
router.use('/tickets', ticketsRoutes);
router.use('/manageusers', manageRoutes);

module.exports = router;
