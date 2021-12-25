const { Ticket } = require('../models');

const ticketdata = [
  {
    title: 'Need an MVC for this project',
    ticket_text: 'Presentation is due soon*',
    status: 'Open',
    priority: 'High',
    user_id: 1
  },
  {
    title: 'Bug in navigation',
    ticket_text: 'Links are not working at the moment. Please fix.',
    status: 'Closed',
    priority: 'Critical',
    user_id: 2
  },
  {
    title: 'Help with CSS',
    ticket_text: "Used bootstrap 5 and bootstrap icon. Need to make user interface nicer",
    status: 'Open',
    priority: 'Low',
    user_id: 3
  },
];

const seedTickets = () => Ticket.bulkCreate(ticketdata);

module.exports = seedTickets;
