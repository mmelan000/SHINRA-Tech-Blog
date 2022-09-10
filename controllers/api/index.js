const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const replyRoutes = require('./replyRoutes');

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);
router.use('/replies', replyRoutes);

module.exports = router;
