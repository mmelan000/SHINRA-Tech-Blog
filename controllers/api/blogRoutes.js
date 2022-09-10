const router = require('express').Router();
const { User, Blog, Reply } = require('../../models');
const withAuth = require('../../utils/authorize.js');

// get all
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [{ model: User }, { model: Reply, include: { model: User } }],
    });

    res.status(200).json(blogData);
  } catch {
    res.status(500).json(err);
  }
});
// get one by id
router.get('/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [{ model: User }, { model: Reply, include: { model: User } }],
    });

    if (!blogData) {
      res
        .status(404)
        .json({ message: `No blog found with ID: ${req.params.id}` });
      return;
    }

    res.status(200).json(blogData);
  } catch {
    res.status(500).json(err);
  }
});
// create one
router.post('/', withAuth, async (req, res) => {
  try {
    const { blog_title, blog_text, user_id } = req.body;

    const newBlogData = await Blog.create({
      blog_title,
      blog_text,
      user_id,
    });

    res.status(200).json(newBlogData);
  } catch (err) {
    res.status(400).json(err);
  }
});
// update one by id
router.put('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id);

    if (!blogData) {
      res
        .status(404)
        .json({ message: `No blog found with ID: ${req.params.id}` });
      return;
    }

    const updateBlogData = await Blog.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updateBlogData[0]) {
      res
        .status(400)
        .json({ message: `No blog data updated for ID: ${req.params.id}` });
      return;
    }

    res.status(200).json(updateBlogData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// delete one by id
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deleteBlogData = await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deleteBlogData) {
      res
        .status(404)
        .json({ message: `No blog found with ID: ${req.params.id}` });
      return;
    }

    res.status(200).json(deleteBlogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
