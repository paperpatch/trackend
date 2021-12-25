const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'First!',
    user_id: 2,
    ticket_id: 1
  },
  {
    comment_text: 'I agree! MVC is really important! It helped organize some of my projects.',
    user_id: 4,
    ticket_id: 1
  },
  {
    comment_text: 'Your car warranty is about to be expired. Please call XXX-XXX-XXXX to renew your warranty.',
    user_id: 5,
    ticket_id: 2
  },
  {
    comment_text: 'How do I delete the above comment?',
    user_id: 2,
    ticket_id: 2
  },
  {
    comment_text: 'Oops! Made a typo error',
    user_id: 3,
    ticket_id: 3
  },
  {
    comment_text: 'Great! It is really nice to hear other people voice out their love for ORMs.',
    user_id: 1,
    ticket_id: 3
  },
  {
    comment_text: 'I hate ORMs.',
    user_id: 6,
    ticket_id: 3
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
