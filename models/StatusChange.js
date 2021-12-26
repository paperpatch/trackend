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
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ticket_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ticket',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'StatusChange'
  }
);

module.exports = StatusChange;