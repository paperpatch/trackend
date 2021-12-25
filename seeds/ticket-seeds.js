const { Ticket } = require('../models');

const ticketdata = [
  {
    title: 'Need an MVC for this project',
    ticket_text: 'Presentation is due soon*',
    status: true,
    status_change: 1,
    priority_id: 2,
    user_id: 1
  },
  {
    title: 'Bug in navigation',
    ticket_text: 'Links are not working at the moment. Please fix.',
    status: false,
    status_change: 2,
    priority_id: 1,
    user_id: 2
  },
  {
    title: 'Help with CSS',
    ticket_text: "Used bootstrap 5 and bootstrap icon. Need to make user interface nicer",
    status: true,
    status_change: 1,
    priority_id: 4,
    user_id: 3
  },
];

const seedTickets = () => Ticket.bulkCreate(ticketdata);

module.exports = seedTickets;
