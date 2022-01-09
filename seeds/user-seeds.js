const { User } = require('../models');

const userdata = [
  {
    username: 'admin',
    email: 'admin@admin.com',
    role_id: 1,
    password: 'admin'
  },
  {
    username: 'guest',
    email: 'guest@guest.com',
    role_id: 3,
    password: 'guest'
  },
  {
    username: 'simple',
    email: 'simple@simple.com',
    role_id: 2,
    password: 'password123'
  },
  {
    username: 'random',
    email: 'random@random.com',
    role_id: 2,
    password: 'password123'
  },
  {
    username: 'secret',
    email: 'secret@secret.com',
    role_id: 2,
    password: 'password123'
  },
  {
    username: 'someone',
    email: 'someone@someone.com',
    role_id: 2,
    password: 'password123'
  },
  {
    username: 'food',
    email: 'food@food.com',
    role_id: 2,
    password: 'password123'
  },
  {
    username: 'mouse',
    email: 'mouse@mouse.com',
    role_id: 2,
    password: 'password123'
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
