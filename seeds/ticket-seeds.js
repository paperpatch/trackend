const { Ticket } = require('../models');

const ticketdata = [
  {
    title: 'Need an MVC for this project',
    ticket_text: 'Presentation is due soon*',
    status: true,
    user_id: 1,
    priority_id: 2,
    status_change_id: 1,
  },
  {
    title: 'Bug in navigation',
    ticket_text: 'Links are not working at the moment. Please fix.',
    status: false,
    user_id: 2,
    priority_id: 1,
    status_change_id: 2,
  },
  {
    title: 'Help with CSS',
    ticket_text: "Used bootstrap 5 and bootstrap icon. Need to make user interface nicer",
    status: true,
    user_id: 3,
    priority_id: 4,
    status_change_id: 1,
  },
  {
    title: 'Priority Tickets Work',
    ticket_text: "Priority routes and models are not working correctly. Need immediate fix.",
    status: true,
    user_id: 3,
    priority_id: 1,
    status_change_id: 1,
  },
  {
    title: 'Add Type Section',
    ticket_text: "Just like with Priority and StatusChange. A type feature section would be nice. It would incorporate whether the issue is a bug, IT, feature or other issue type.",
    status: true,
    user_id: 1,
    priority_id: 2,
    status_change_id: 1,
  },
  {
    title: 'Wireframe',
    ticket_text: "For this project, we need a wireframe. We'll need one to start this project off.",
    status: true,
    user_id: 2,
    priority_id: 1,
    status_change_id: 2,
  },
  {
    title: 'Minimal Viable Product',
    ticket_text: "Need a functional project.",
    status: true,
    user_id: 1,
    priority_id: 4,
    status_change_id: 2,
  },
];

const seedTickets = () => Ticket.bulkCreate(ticketdata);

module.exports = seedTickets;
