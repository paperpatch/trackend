const { Priority } = require('../models');

const prioritydata = [
  {
    ticket_id: 1
  },
  {
    ticket_id: 2
  },
  {
    ticket_id: 3
  }
];

const seedPriority = () => Priority.bulkCreate(prioritydata);

module.exports = seedPriority;