/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('User', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Telephone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Age: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
      tableName: 'User'
    });
};
