const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'adamjfield',
    email: 'adam@test.com',
    password: 'password123',
  },
  {
    username: 'johnsmith',
    email: 'john@test.com',
    password: 'password123',
  },
  {
    username: 'janedoe',
    email: 'jane@test.com',
    password: 'password123',
  },
  {
    username: 'stevejones',
    email: 'steve@test.com',
    password: 'password123',
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
