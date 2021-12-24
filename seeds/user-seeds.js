const { User} = require('../models');

const userdata = [
  {
    username: 'simple',
    password: 'password123'
  },
  {
    username: 'random',
    password: 'password123'
  },
  {
    username: 'secret',
    password: 'password123'
  },
  {
    username: 'someone',
    password: 'password123'
  },
  {
    username: 'food',
    password: 'password123'
  },
  {
    username: 'mouse',
    password: 'password123'
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
