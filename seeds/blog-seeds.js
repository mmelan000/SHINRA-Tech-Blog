const { Blog } = require('../models');

const blogData = [
  {
    blog_title: 'user 1.',
    blog_text: "Hi, I'm user 1.",
    user_id: 1,
  },
  {
    blog_title: 'user 2.',
    blog_text: "Hi, I'm user 2.",
    user_id: 2,
  },
  {
    blog_title: 'user 3.',
    blog_text: "Hi, I'm user 3.",
    user_id: 3,
  },
  {
    blog_title: 'user 4.',
    blog_text: "Hi, I'm user 4.",
    user_id: 4,
  },
  {
    blog_title: 'user 5.',
    blog_text: "Hi, I'm user 5.",
    user_id: 5,
  },
  {
    blog_title: 'user 6.',
    blog_text: "Hi, I'm user 6.",
    user_id: 6,
  },
  {
    blog_title: 'user 7.',
    blog_text: "Hi, I'm user 7.",
    user_id: 7,
  },
  {
    blog_title: 'user 8.',
    blog_text: "Hi, I'm user 8.",
    user_id: 8,
  },
  {
    blog_title: 'user 9.',
    blog_text: "Hi, I'm user 9.",
    user_id: 9,
  },
  {
    blog_title: 'swords are the best.',
    blog_text: 'I like swords.',
    user_id: 1,
  },
  {
    blog_title: 'materia is the best.',
    blog_text: 'I like materia.',
    user_id: 1,
  },
  {
    blog_title: 'punching is the best.',
    blog_text: 'I like punching things',
    user_id: 2,
  },
  {
    blog_title: 'kicking is the best.',
    blog_text: 'I like kicking things',
    user_id: 2,
  },
  {
    blog_title: 'love is the best.',
    blog_text: 'I like romantic walks on the beach.',
    user_id: 2,
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
