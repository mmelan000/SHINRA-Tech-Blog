console.log('/routes/api/userRoutes.js');
const router = require('express').Router();
const { User, Blog } = require('../../models');
// get all
router.get('/', async (req, res) => {
  try{
    const userData = await User.findAll();
    // {
    //     include: [{ model: Blog}]
    //   }

    res.status(200).json(userData);
  } catch {
    res.status(500).json(err);
  }
});
// get one by id
router.get('/:id', async (req, res) => {
  try{
    const userData = await User.findByPk(req.params.id, {
      include: [{ model: Blog }]
    });

    if (!userData) {
      res.status(404).json({ message: `No user found with ID: ${req.params.id}` });
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
    console.log(username);
    console.log(email);
    console.log(password);

    const newUserData = await User.create({
        username,
        email,
        password
    });
    console.log(newUserData);
    res.status(200).json(newUserData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});
// update one by id
router.put('/:id', async (req, res) => {
  try{
    const userData = await User.findByPk(req.params.id);
    const updateUserData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!userData) {
      res.status(404).json({ message: `No user found with ID: ${req.params.id}` });
      return;
    }
  
    if (!updateUserData[0]) {
      res.status(400).json({ message: `No user data updated for ID: ${req.params.id}` });
      return;
    };

    res.status(200).json(updateUserData);
  } catch {
    res.status(500).json(err);
  };

});
// delete one by id
router.delete('/:id', async (req, res) => {
  try {
    const deleteUserData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deleteUserData) {
      res.status(404).json({ message: `No user found with ID: ${req.params.id}` });
      return;
    }

    res.status(200).json(deleteUserData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
