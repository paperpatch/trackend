const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: "I'll help you when I'm done",
    user_id: 2,
    ticket_id: 1
  },
  {
    comment_text: 'Working on it.',
    user_id: 4,
    ticket_id: 1
  },
  {
    comment_text: 'Please note that the bug can be found in the view handlebar section.',
    user_id: 5,
    ticket_id: 2
  },
  {
    comment_text: 'Please check my pull request.',
    user_id: 2,
    ticket_id: 2
  },
  {
    comment_text: 'I accidently made a pull request. Please disregard.',
    user_id: 3,
    ticket_id: 3
  },
  {
    comment_text: 'I can work on it.',
    user_id: 1,
    ticket_id: 3
  },
  {
    comment_text: '.',
    user_id: 6,
    ticket_id: 3
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
