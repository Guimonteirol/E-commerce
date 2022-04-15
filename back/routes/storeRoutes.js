const { Router } = require('express');
const StoreController = require('../controllers/storeController');
const router = Router();

router.post('/add', StoreController.add)
router.get('/show', StoreController.show)
router.post('/edit', StoreController.edit)
router.post('/delete', StoreController.delete)


module.exports = router