const User = require('./user');
const Blog = require('./blog');
const Reply = require('./reply');

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
