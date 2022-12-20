'use strict';
/** @type {import('sequelize-cli').Migration} */
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reviewId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Reviews",
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      spotId: {
       type: Sequelize.INTEGER,
       allowNull: false,
          references: {
            model: "Spots",
            key: 'id'
          },
          onDelete:'CASCADE'
        },
        userId: {
           type: Sequelize.INTEGER,
           allowNull: false,
              references: {
                model: "Users",
                key: 'id'
              },
              onDelete:'CASCADE'
          },
      review: {
        type: Sequelize.STRING,
        allowNull: false,
     },
      stars: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    }, options);
  },
  async down(queryInterface, Sequelize) {
    options.tableName = "Reviews"
    await queryInterface.dropTable(options);
  }
};
