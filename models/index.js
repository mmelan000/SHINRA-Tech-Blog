const User = require('./user.js');
const Blog = require('./blog.js');
const Reply = require('./reply.js');

User.hasMany(Blog, {
  foreignKey: 'user_id',
});

Blog.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Reply, {
  foreignKey: 'user_id',
});

Reply.belongsTo(User, {
  foreignKey: 'user_id',
});

Blog.hasMany(Reply, {
  foreignKey: 'blog_id',
});

Reply.belongsTo(Blog, {
  foreignKey: 'blog_id',
});

module.exports = {
  User,
  Blog,
  Reply,
};
