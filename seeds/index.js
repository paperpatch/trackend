const seedUsers = require('./user-seeds');
const seedTickets = require('./ticket-seeds');
const seedComments = require('./comment-seeds');
const seedPriority = require('./priority-seeds')
const seedStatusChange = require('./status-change-seeds')

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('-------------- Seeding Initialized');

  await seedUsers();
  console.log('-------------- Users seeded');

  await seedTickets();
  console.log('-------------- Tickets seeded');

  await seedComments();
  console.log('-------------- Comments seeded');

  await seedPriority();
  console.log('-------------- Priority seeded');

  await seedStatusChange();
  console.log('-------------- Status Change seeded');

  process.exit(0);
};

seedAll();