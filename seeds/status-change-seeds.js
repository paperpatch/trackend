const { StatusChange } = require('../models');

const statuschangedata = [
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

const seedStatusChange = () => StatusChange.bulkCreate(statuschangedata);

module.exports = seedStatusChange;