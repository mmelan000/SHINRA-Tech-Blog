console.log('/route/homeRoutes.js');
const router = require('express').Router();
const { User, Blog, Reply } = require('../models');
const withAuth = require('../utils/authorize.js');

// GET all blogs for homepage
router.get('/', async (req, res) => {
  try {
    const allBlogs = await Blog.findAll({
      attributes: ['id', 'blog_title', 'date_created'],
      include: [{ model: User, attributes: ['username'] }],
    });

    const blogs = allBlogs.map((blogs) => blogs.get({ plain: true }));

    res.render('home', {
      blogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one blog
router.get('/blog/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      attributes: ['blog_title', 'blog_text', 'date_created'],
      include: [
        { model: User, attributes: ['username'] },
        {
          model: Reply,
          attributes: ['reply_text', 'date_created'],
          include: { model: User, attributes: ['username'] },
        },
      ],
    });

    if (!blogData) {
      res.render('404');
      return;
    }

    const loadBlog = await blogData.get({ plain: true });

    res.render('blog', {
      loadBlog,
      loggedIn: req.session.loggedIn,
      user: req.session.user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  res.render('login');
  return;
});

router.get('/signup', (req, res) => {
  res.render('signup');
  return;
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const allBlogs = await Blog.findAll({
      where: { user_id: req.session.user },
    });

    const blogs = allBlogs.map((blogs) => blogs.get({ plain: true }));

    res.render('dashboard', {
      blogs,
      loggedIn: req.session.loggedIn,
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router;

module.exports = router;
