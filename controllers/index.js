const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const priorityRoutes = require('./priority-routes.js');
const ticketsRoutes = require('./tickets-routes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/priority', priorityRoutes);
router.use('/tickets', ticketsRoutes)

module.exports = router;
