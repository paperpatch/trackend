const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Priority extends Model {}

Priority.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'priority'
  }
);

module.exports = Priority;