'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('exercises', [
      { name: 'Aquecimento', description: 'Exercício para aquecimento vocal', created_at: new Date(), updated_at: new Date() }
    ], {});

    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('exercises', null, {});
  }
};
