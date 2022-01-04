const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ticket extends Model {}

Ticket.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ticket_text: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    priority_id: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: 'priority',
      //   key: 'id'
      // }
    },
    status_change_id: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: 'statuschange',
      //   key: 'id'
      // }
    },
    type_id: {
      type: DataTypes.INTEGER,
    },
    // ticket_date: {
    //   type: DataTypes.DATE,
    //   defaultValue: DataTypes.NOW,
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'ticket'
  }
);

module.exports = Ticket;
