console.log('/route/homeRoutes.js');
const router = require('express').Router();
const { User, Blog, Reply } = require('../models');

// GET all blogs for homepage
router.get('/', async (req, res) => {
  try {
    const allBlogs = await Blog.findAll({
      attributes: ['id', 'blog_title', 'date_created'],
      include: [{ model: User, attributes: ['username'] }],
    });
    console.log(allBlogs);
    const blogs = allBlogs.map((blogs) => blogs.get({ plain: true }));
    console.log(blogs);
    res.render('home', {
      blogs,
      //   loggedIn: req.session.loggedIn,
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
      include: [{ mode: User, attributes: ['username'] }],
    });

    const gallery = dbGalleryData.get({ plain: true });
    res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // GET one painting
// router.get('/painting/:id', async (req, res) => {
//   try {
//     const dbPaintingData = await Painting.findByPk(req.params.id);

//     const painting = dbPaintingData.get({ plain: true });
//     res.render('painting', { painting, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // Login route
// router.get('/login', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }
//   res.render('login');
// });

module.exports = router;
