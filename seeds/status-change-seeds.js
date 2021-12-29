const { StatusChange } = require('../models');

const statuschangedata = [
  {
    statusChange: 'Created',
  },
  {
    statusChange: 'Edited'
  },
];

const seedStatusChange = () => StatusChange.bulkCreate(statuschangedata, { individualHooks: true });
module.exports = seedStatusChange;