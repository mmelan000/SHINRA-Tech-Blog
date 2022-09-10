const router = require('express').Router();
const { User, Blog, Reply } = require('../../models');
const withAuth = require('../../utils/authorize.js');
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
router.post('/', withAuth, async (req, res) => {
  try {
    const { reply_text, user_id, blog_id } = req.body;

    const newReplyData = await Reply.create({
      reply_text,
      user_id,
      blog_id,
    });

    res.status(200).json(newReplyData);
  } catch (err) {
    res.status(400).json(err);
  }
});
// update one by id
router.put('/:id', withAuth, async (req, res) => {
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
router.delete('/:id', withAuth, async (req, res) => {
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
