const { Role } = require('../models');

const roledata = [
  {
    role: 'Admin',
  },
  {
    role: 'Member',
  },
  {
    role: 'Guest',
  },
];

const seedRole = () => Role.bulkCreate(roledata);

module.exports = seedRole;