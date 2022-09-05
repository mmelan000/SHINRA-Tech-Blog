console.log('/routes/api/userRoutes.js');
const router = require('express').Router();
const { User, Blog, Reply } = require('../../models');
// get all
router.get('/', async (req, res) => {
  try {
    const replyData = await Reply.findAll({
      include: [{ model: User }, { model: Blog, include: { model: User } }],
    });

    res.status(200).json(replyData);
  } catch {
    res.status(500).json(err);
  }
});
// get one by id
router.get('/:id', async (req, res) => {
  try {
    const replyData = await Reply.findByPk(req.params.id, {
      include: [{ model: User }, { model: Blog, include: { model: User } }],
    });

    if (!replyData) {
      res
        .status(404)
        .json({ message: `No reply found with ID: ${req.params.id}` });
      return;
    }

    res.status(200).json(replyData);
  } catch {
    res.status(500).json(err);
  }
});
// create one
router.post('/', async (req, res) => {
  // TODO: add auth
  try {
    const { reply_text, user_id, blog_id } = req.body;

    const newReplyData = await Reply.create({
      reply_text,
      user_id,
      blog_id,
    });
    console.log(newReplyData);
    res.status(200).json(newReplyData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});
// update one by id
router.put('/:id', async (req, res) => {
  // TODO: add session check to make sure user is only editing their information.

  try {
    const replyData = await Reply.findByPk(req.params.id);

    if (!replyData) {
      res
        .status(404)
        .json({ message: `No reply found with ID: ${req.params.id}` });
      return;
    }

    const updateReplyData = await Reply.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updateReplyData[0]) {
      res
        .status(400)
        .json({ message: `No reply data updated for ID: ${req.params.id}` });
      return;
    }

    res.status(200).json(updateReplyData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// delete one by id
router.delete('/:id', async (req, res) => {
  // TODO: add session check to make sure user is only deleting their information.

  try {
    const deleteReplyData = await Reply.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deleteReplyData) {
      res
        .status(404)
        .json({ message: `No reply found with ID: ${req.params.id}` });
      return;
    }

    res.status(200).json(deleteReplyData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
