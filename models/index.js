// import all models 
const Ticket = require('./Ticket');
const User = require('./User');
const Comment = require('./Comment');
const Priority = require('./Priority');
const StatusChange = require('./StatusChange');
const Type = require('./Type');
const Role = require('./Role');

// create associations
User.hasMany(Ticket, {
  foreignKey: 'user_id'
});

User.hasMany(Ticket, {
  foreignKey: 'assigned_id'
})

Ticket.belongsTo(User, {
  as: 'user',
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Ticket.belongsTo(User, {
  as: 'assign',
  foreignKey: 'assigned_id',
  onDelete: 'CASCADE',
})

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

Priority.hasMany(Ticket, {
  foreignKey: 'priority_id',
  // onDelete: 'CASCADE',
});

Ticket.belongsTo(Priority, {
  foreignKey: 'priority_id',
  onDelete: 'CASCADE',
});

StatusChange.hasMany(Ticket, {
  foreignKey: 'status_change_id',
  // onDelete: 'CASCADE',
});

Ticket.belongsTo(StatusChange, {
  foreignKey: 'status_change_id',
  onDelete: 'CASCADE'
});

Type.hasMany(Ticket, {
  foreignKey: 'type_id',
  // onDelete: 'CASCADE',
});

Ticket.belongsTo(Type, {
  foreignKey: 'type_id',
  onDelete: 'CASCADE'
});

Role.hasMany(User, {
  foreignKey: 'role_id',
  // onDelete: 'CASCADE',
});

User.belongsTo(Role, {
  foreignKey: 'role_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Ticket, Comment, Priority, StatusChange, Type, Role };