const { findOneAndReplace } = require('../models/cartModel');
const Cart = require('../models/cartModel')
const Store = require('../models/storeModel');
const { add } = require('./storeController');
class CartController{

    static async addCart(req, res){
        const {_id} = req.body
        const addCart = await Store.find({_id: _id}).lean();
        console.log(addCart)
        const newCart = new Cart({title: addCart[0].title, price: addCart[0].price, size: addCart[0].size, img: addCart[0].img});
        await newCart.save();
        res.status(201).json(newCart)
    }

    static async showCart(req, res){
        let query = {};
        const show = await Cart.find(query).lean();
        res.status(201).json(show);
    }

}

module.exports = CartController