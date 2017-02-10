'use strict';
module.exports = function(sequelize, DataTypes) {
  var Quotes = sequelize.define('Quotes', {
    quote: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Quotes;
};