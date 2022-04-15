const { Router } = require('express');
const router = Router();


const cartRoutes = require('./cartRoutes')
const storeRoutes = require('./storeRoutes')

router.use('/', cartRoutes)
router.use('/store', storeRoutes)

module.exports = router;