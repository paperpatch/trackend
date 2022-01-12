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
    username: 'BDavidson',
    email: 'bill.davidson@email.com',
    role_id: 2,
    password: 'password123'
  },
  {
    username: 'Philip1983',
    email: 'philip.jackson@email.com',
    role_id: 2,
    password: 'password123'
  },
  {
    username: 'princessamy',
    email: 'amy.riley@email.com',
    role_id: 2,
    password: 'password123'
  },
  {
    username: 'UncleFreddy',
    email: 'fred.randall.@email.com',
    role_id: 2,
    password: 'password123'
  },
  {
    username: 'lisa1234',
    email: 'lisa.devries.@email.com',
    role_id: 2,
    password: 'password123'
  },
  {
    username: 'Jimmythekid',
    email: 'james.feldman@email.com',
    role_id: 2,
    password: 'password123'
  },
  {
    username: 'BobbyB',
    email: 'robert.bradford@email.com',
    role_id: 2,
    password: 'password123'
  },
  {
    username: 'Cindy1975',
    email: 'cindy.smith@email.com',
    role_id: 2,
    password: 'password123'
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
