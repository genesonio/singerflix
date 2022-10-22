'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('123456', 10)

    await queryInterface.bulkInsert('users', [
      {
        first_name: 'Admin',
        last_name: 'User',
        gender: 'male',
        phone: '99999-9999',
        birth: '1998-05-28',
        email: 'admin@email.com',
        password: hashedPassword,
        role: 'admin',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', { where: { email: 'admin@email.com' }}, )
  }
};
