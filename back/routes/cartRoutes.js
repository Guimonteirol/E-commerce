const { Router } = require('express')
const CartController = require('../controllers/cartController')
const router = Router();

router.post('/addCart', CartController.addCart)
router.get('/showCart', CartController.showCart)
router.post('/deleteCart', CartController.deleteCart)

module.exports = router