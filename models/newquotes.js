'use strict';
module.exports = function(sequelize, DataTypes) {
  var newquotes = sequelize.define('newquotes', {
    quote: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return newquotes;
};