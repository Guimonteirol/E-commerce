const { Router } = require('express');
const CartController = require('../controllers/cartController');
const router = Router();

router.post('/add', CartController.add)
router.get('/show', CartController.show)
router.post('/edit', CartController.edit)
router.post('/delete', CartController.delete)


module.exports = router