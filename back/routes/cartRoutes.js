const { Router } = require('express')
const CartConstroller = require('../controllers/cartController')
const router = Router();

router.post('/addCart', CartConstroller.addCart)
router.get('/showCart', CartConstroller.showCart)

module.exports = router