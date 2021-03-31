const router = require('express').Router();
const showRoutes = require('./show-routes')
const userRoutes = require('./user-routes.js');

router.use('/shows', showRoutes);
router.use('/users', userRoutes);



module.exports = router;