'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const vocal_range = ['Soprano', 'Mezzo-Soprano', 'Contralto', 'Tenor', 'Barítono', 'Baixo']

    for (let i = 0; i < vocal_range.length; i++) {
      await queryInterface.bulkInsert('vocal_ranges', [
        { name: vocal_range[i], created_at: new Date(), updated_at: new Date()},
    ], {})
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('vocal_ranges', null, {}); 
  }
};
