const { findOneAndReplace } = require('../models/cartModel');
const Cart = require('../models/cartModel')
const Store = require('../models/storeModel');

class CartController{

    static async addCart(req, res){
        try{
        const {_id, size} = req.body
        const addCart = await Store.find({_id: _id}).lean();
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
        catch (error) {
            return res.status(404).json({
                'message': `Error ${error.message}`
            })
        }
    }

    static async showCart(req, res){
        try{
        let query = {};
        const show = await Cart.find(query).lean();
        res.status(201).json(show);
        }catch (error) {
            return res.status(404).json({
                'message': `Error ${error.message}`
            })
        }
    }

    static async deleteCart(req, res){
        try{
        const {_id} = req.body;
        await Cart.findByIdAndDelete(_id)
        res.status(201).json("Deletado")
        }catch (error) {
            return res.status(404).json({
                'message': `Error ${error.message}`
            })
        }
    }
}

module.exports = CartController