'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Quotes')
  },

  down: function (queryInterface, Sequelize) {
  }
};
