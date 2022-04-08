const {db} = require('./../db');
const Cart = require('./../models/cartModel')


class CartController {

    static async add(req, res){
        const {title, price, size} = req.body;
        const newProduct = new Cart( {title, price, size} );
        await newProduct.save();
        res.status(201).json(newProduct)
}

    static async show(req, res){
        let query = {};
        const show = await Cart.find(query).lean();
        res.status(201).json(show);
    }

    static async edit(req, res){
        const {_id, title, price, size} = req.body
        const editPorudct =  await Cart.findByIdAndUpdate(_id,{ title, price, size });
        res.status(201).json(editPorudct)
    }

    static async delete(req, res){
        const {_id} = req.body;
        await Cart.findByIdAndDelete(_id)
        res.status(201).json("Deletado")
    }

}

module.exports = CartController