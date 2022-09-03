const User = require('./user');
const Blog = require('./Blog');

User.hasMany(Blog, {
    foreignKey: 'user_id'
});

Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

Blog.hasOne(Blog, {
    as: 'op',
    foreignKey: 'blog_id'
})

Blog.belongsTo(Blog, { 
    as: 'reply',
    foreignKey: 'blog_id'
});


module.exports = {
  User,
  Blog,
};