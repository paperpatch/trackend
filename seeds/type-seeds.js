const { Type } = require('../models');

const typedata = [
  {
    type: 'Bug',
  },
  {
    type: 'IT',
  },
  {
    type: 'Security',
  },
  {
    type: 'Server',
  },
  {
    type: 'Other',
  },
];

const seedType = () => Type.bulkCreate(typedata);

module.exports = seedType;