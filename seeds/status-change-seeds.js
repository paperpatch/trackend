const { StatusChange } = require('../models');

const statuschangedata = [
  {
    status: 'Created',
  },
  {
    status: 'Edited'
  },
];

const seedStatusChange = () => StatusChange.bulkCreate(statuschangedata);

module.exports = seedStatusChange;