'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('videos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.DataTypes.TEXT
      },
      order: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      video_url: {
        type: Sequelize.DataTypes.STRING
      },
      seconds_long: {
        type: Sequelize.DataTypes.INTEGER
      },
      vocal_range_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'vocal_ranges', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      exercise_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'exercises', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('videos')
  }
};
