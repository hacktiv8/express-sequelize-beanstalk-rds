'use strict';
module.exports = function(sequelize, DataTypes) {
  var quotes = sequelize.define('quotes', {
    quote: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return quotes;
};