'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      { name: 'Soprano', created_at: new Date(), updated_at: new Date()},
      { name: 'Mezzo-Soprano', created_at: new Date(), updated_at: new Date()},
      { name: 'Barítono', created_at: new Date(), updated_at: new Date()},
  ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {}); 
  }
};
