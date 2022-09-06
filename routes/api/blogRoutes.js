console.log('/routes/api/blogRoutes.js');
const router = require('express').Router();
const { User, Blog, Reply } = require('../../models');
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
    console.log(blogData);
    res.status(200).json(blogData);
  } catch {
    res.status(500).json(err);
  }
});
// create one
router.post('/', async (req, res) => {
  // TODO: add auth
  try {
    const { blog_text, user_id } = req.body;

    const newBlogData = await Blog.create({
      blog_text,
      user_id,
    });

    console.log(newBlogData);
    res.status(200).json(newBlogData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});
// update one by id
router.put('/:id', async (req, res) => {
  // TODO: add session check to make sure user is only editing their information.

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
router.delete('/:id', async (req, res) => {
  // TODO: add session check to make sure user is only deleting their information.

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
