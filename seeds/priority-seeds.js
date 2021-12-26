const { Priority } = require('../models');

const prioritydata = [
  {
    level: 'Critical',
  },
  {
    level: 'High',
  },
  {
    level: 'Moderate',
  },
  {
    level: 'Low',
  }
];

const seedPriority = () => Priority.bulkCreate(prioritydata);

module.exports = seedPriority;