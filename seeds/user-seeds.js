const { User} = require('../models');

const userdata = [
  {
    username: 'simple',
    email: 'simple@simple.com',
    role: 'admin',
    password: 'password123'
  },
  {
    username: 'random',
    email: 'random@random.com',
    role: 'admin',
    password: 'password123'
  },
  {
    username: 'secret',
    email: 'secret@secret.com',
    role: 'member',
    password: 'password123'
  },
  {
    username: 'someone',
    email: 'someone@someone.com',
    role: 'member',
    password: 'password123'
  },
  {
    username: 'food',
    email: 'food@food.com',
    role: 'member',
    password: 'password123'
  },
  {
    username: 'mouse',
    email: 'mouse@mouse.com',
    role: 'member',
    password: 'password123'
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
