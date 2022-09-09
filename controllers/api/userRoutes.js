console.log('/routes/api/userRoutes.js');
const router = require('express').Router();
const { User, Blog, Reply } = require('../../models');
// get all
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [
        { model: Blog, include: { model: Reply, include: { model: User } } },
        { model: Reply, include: { model: Blog, include: { model: User } } },
      ],
    });

    res.status(200).json(userData);
  } catch {
    res.status(500).json(err);
  }
});
// get one by id
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [{ model: Blog }, { model: Reply }],
    });

    if (!userData) {
      res
        .status(404)
        .json({ message: `No user found with ID: ${req.params.id}` });
      return;
    }

    res.status(200).json(userData);
  } catch {
    res.status(500).json(err);
  }
});
// create one
router.post('/', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUserData = await User.create({
      username,
      email,
      password,
    });

    console.log(newUserData);

    req.session.save(() => {
      (req.session.loggedIn = true), (req.session.user = newUserData.id);

      res.status(200).json({
        user: newUserData,
        message: 'You have created a new user and are now logged in!',
      });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});
// update one by id
router.put('/:id', async (req, res) => {
  // TODO: add session check to make sure user is only editing their information.
  try {
    const userData = await User.findByPk(req.params.id);

    if (!userData) {
      res
        .status(404)
        .json({ message: `No user found with ID: ${req.params.id}` });
      return;
    }

    const updateUserData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updateUserData[0]) {
      res
        .status(400)
        .json({ message: `No user data updated for ID: ${req.params.id}` });
      return;
    }

    res.status(200).json(updateUserData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// delete one by id
router.delete('/:id', async (req, res) => {
  // TODO: add session check to make sure user is only deleting their information.
  try {
    const deleteUserData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deleteUserData) {
      res
        .status(404)
        .json({ message: `No user found with ID: ${req.params.id}` });
      return;
    }

    res.status(200).json(deleteUserData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      (req.session.loggedIn = true), (req.session.user = dbUserData.id);

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
