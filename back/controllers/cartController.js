const { findOneAndReplace } = require('../models/cartModel');
const Cart = require('../models/cartModel')
const Store = require('../models/storeModel');

class CartController{

    static async addCart(req, res){
        const {_id, size} = req.body
        // console.log(req.body)
        // console.log(_id)
        const addCart = await Store.find({_id: _id}).lean();
        console.log(addCart)
        const newCart = new Cart({
            title: addCart[0].title,
            price: addCart[0].price,
            size: size,
            img: addCart[0].img,
            quant: addCart[0].quant,
            total: addCart[0].price});
        await newCart.save();
        res.status(201).json(_id);
    }

    static async showCart(req, res){
        let query = {};
        const show = await Cart.find(query).lean();
        res.status(201).json(show);
    }

    static async deleteCart(req, res){
        const {_id} = req.body;
        await Cart.findByIdAndDelete(_id)
        res.status(201).json("Deletado")
    }

}

module.exports = CartController