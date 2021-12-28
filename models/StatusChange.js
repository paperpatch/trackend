const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class StatusChange extends Model {}

StatusChange.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    statusChange: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'statusChange'
  }
);

module.exports = StatusChange;