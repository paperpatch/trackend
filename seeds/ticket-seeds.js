const { Ticket } = require('../models');

const ticketdata = [
  {
    title: 'Need an MVC for this project',
    ticket_text: 'Presentation is due soon*',
    status: true,
    user_id: 1,
    priority_id: 2,
    status_change_id: 1,
    type_id: 5,
    assigned_id: 2,
    due_date: '2022-05-15',
  },
  {
    title: 'Bug in navigation',
    ticket_text: 'Links are not working at the moment. Please fix.',
    status: false,
    user_id: 2,
    priority_id: 1,
    status_change_id: 2,
    type_id: 1,
    assigned_id: 2,
    due_date: '2022-06-04',
  },
  {
    title: 'Help with CSS',
    ticket_text: "Used bootstrap 5 and bootstrap icon. Need to make user interface nicer",
    status: true,
    user_id: 3,
    priority_id: 4,
    status_change_id: 1,
    type_id: 4,
    assigned_id: 5,
    due_date: '2022-07-03',
  },
  {
    title: 'Priority Tickets Work',
    ticket_text: "Priority routes and models are not working correctly. Need immediate fix.",
    status: true,
    user_id: 3,
    priority_id: 1,
    status_change_id: 1,
    type_id: 2,
    assigned_id: 6,
    due_date: '2022-03-04',
  },
  {
    title: 'Add Type Section',
    ticket_text: "Just like with Priority and StatusChange. A type feature section would be nice. It would incorporate whether the issue is a bug, IT, feature or other issue type.",
    status: true,
    user_id: 1,
    priority_id: 2,
    status_change_id: 1,
    type_id: 4,
    assigned_id: 7,
    due_date: '2022-01-22',
  },
  {
    title: 'Wireframe',
    ticket_text: "For this project, we need a wireframe. We'll need one to start this project off.",
    status: true,
    user_id: 2,
    priority_id: 1,
    status_change_id: 2,
    type_id: 5,
    assigned_id: 4,
    due_date: '2022-01-04',
  },
  {
    title: 'Minimal Viable Product',
    ticket_text: "Need a functional project.",
    status: true,
    user_id: 1,
    priority_id: 4,
    status_change_id: 2,
    type_id: 4,
    assigned_id: 5,
    due_date: '2022-02-22',
  },
  {
    title: 'Test1',
    ticket_text: "Description1",
    status: true,
    user_id: 1,
    priority_id: 4,
    status_change_id: 2,
    type_id: 4,
    assigned_id: 2,
    due_date: '2022-02-23',
  },
  {
    title: 'Test2',
    ticket_text: "Description2",
    status: true,
    user_id: 2,
    priority_id: 3,
    status_change_id: 2,
    type_id: 4,
    assigned_id: 1,
    due_date: '2022-02-24',
  },
  {
    title: 'Test3',
    ticket_text: "Description3",
    status: true,
    user_id: 3,
    priority_id: 4,
    status_change_id: 2,
    type_id: 4,
    assigned_id: 5,
    due_date: '2022-01-01',
  },
  {
    title: 'Test4',
    ticket_text: "Description4",
    status: true,
    user_id: 1,
    priority_id: 3,
    status_change_id: 2,
    type_id: 1,
    assigned_id: 4,
    due_date: '2022-01-02',
  },
  {
    title: 'Test5',
    ticket_text: "Description5",
    status: false,
    user_id: 4,
    priority_id: 4,
    status_change_id: 2,
    type_id: 4,
    assigned_id: 6,
    due_date: '2022-02-02',
  },
  {
    title: 'Test6',
    ticket_text: "Description6",
    status: true,
    user_id: 1,
    priority_id: 4,
    status_change_id: 2,
    type_id: 4,
    assigned_id: 4,
    due_date: '2022-03-04',
  },
  {
    title: 'Test7',
    ticket_text: "Description7",
    status: true,
    user_id: 1,
    priority_id: 4,
    status_change_id: 2,
    type_id: 2,
    assigned_id: 3,
    due_date: '2022-01-09',
  },
  {
    title: 'Test8',
    ticket_text: "Description8",
    status: true,
    user_id: 1,
    priority_id: 4,
    status_change_id: 2,
    type_id: 3,
    assigned_id: 1,
    due_date: '2022-01-08',
  },
  {
    title: 'Test9',
    ticket_text: "Description9",
    status: true,
    user_id: 1,
    priority_id: 4,
    status_change_id: 2,
    type_id: 1,
    assigned_id: 1,
    due_date: '2022-01-24',
  },
  {
    title: 'Test10',
    ticket_text: "Description10",
    status: true,
    user_id: 1,
    priority_id: 4,
    status_change_id: 2,
    type_id: 4,
    assigned_id: 2,
    due_date: '2022-01-18',
  },
];

const seedTickets = () => Ticket.bulkCreate(ticketdata);

module.exports = seedTickets;
