const router = require('express').Router();
const showRoutes = require('./show-routes')

router.use('/shows', showRoutes)



module.exports = router;