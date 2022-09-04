const { Reply } = require('../models');

const replyData = [
  {
    reply_text: 'This is dumb.',
    user_id: 1,
    blog_id: 1,
  },
  {
    reply_text: 'Gotcha.',
    user_id: 3,
    blog_id: 1,
  },
  {
    reply_text: 'Oh, me too.',
    user_id: 8,
    blog_id: 3,
  },
  {
    reply_text: "You're pandering.",
    user_id: 8,
    blog_id: 5,
  },
  {
    reply_text: "I'm so looking forward to this.",
    user_id: 4,
    blog_id: 3,
  },
  {
    reply_text: "What if we didn't?",
    user_id: 2,
    blog_id: 2,
  },
  {
    reply_text: 'Use the PHS.',
    user_id: 9,
    blog_id: 8,
  },
  {
    reply_text: 'Got any materia?',
    user_id: 3,
    blog_id: 14,
  },
  {
    reply_text: 'LIMIT BREAK!',
    user_id: 2,
    blog_id: 12,
  },
  {
    reply_text: 'Game over man, game over.',
    user_id: 2,
    blog_id: 7,
  },
  {
    reply_text: 'ROCKETS!',
    user_id: 4,
    blog_id: 12,
  },
  {
    reply_text: 'MY NAME IS NANAKI!',
    user_id: 6,
    blog_id: 7,
  },
  {
    reply_text: 'Maybe.',
    user_id: 5,
    blog_id: 7,
  },
  {
    reply_text: 'Sephiroth!',
    user_id: 1,
    blog_id: 2,
  },
];

const seedReplies = () => Reply.bulkCreate(replyData);

module.exports = seedReplies;
