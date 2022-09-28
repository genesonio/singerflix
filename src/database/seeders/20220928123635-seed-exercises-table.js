'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const [categories] = await queryInterface.sequelize.query('SELECT id FROM categories;')

    for (let i = 0; i < categories.length; i++) {
      await queryInterface.bulkInsert('exercises', [
        { name: 'Aquecimento', description: 'Exercício para aquecimento vocal', category_id: categories[i].id , created_at: new Date(), updated_at: new Date() }
      ], {});
    }

    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('exercises', null, {});
  }
};
