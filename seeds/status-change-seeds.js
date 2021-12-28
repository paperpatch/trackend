const { StatusChange } = require('../models');

const statuschangedata = [
  {
    statusChange: 'Created',
  },
  {
    statusChange: 'Edited'
  },
];

const seedStatusChange = () => StatusChange.bulkCreate(statuschangedata);

module.exports = seedStatusChange;