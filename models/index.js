// import all models 
const Ticket = require('./Ticket');
const User = require('./User');
const Comment = require('./Comment');
const Priority = require('./Priority');
const StatusChange = require('./StatusChange');

// create associations
User.hasMany(Ticket, {
  foreignKey: 'user_id'
});

Ticket.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Ticket, {
  foreignKey: 'ticket_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Ticket.hasMany(Comment, {
  foreignKey: 'ticket_id',
  onDelete: 'CASCADE',
});

Ticket.hasMany(Priority, {
  foreignKey: 'ticket_id',
  onDelete: 'CASCADE',
});

Priority.belongsTo(Ticket, {
  foreignKey: 'ticket_id',
  onDelete: 'CASCADE',
});

Ticket.hasMany(StatusChange, {
  foreignKey: 'ticket_id',
  onDelete: 'CASCADE'
});

StatusChange.belongsTo(Ticket, {
  foreignKey: 'ticket_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Ticket, Comment, Priority, StatusChange };