const router = require('express').Router();
const showRoutes = require('./show-routes')
const userRoutes = require('./user-routes.js');
const commentRoutes = require('./comment-routes');

router.use('/comments', commentRoutes);
router.use('/shows', showRoutes);
router.use('/users', userRoutes);



module.exports = router;