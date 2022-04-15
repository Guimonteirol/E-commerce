const {db} = require('../db');
const Store = require('../models/storeModel')


class StoreController {

    static async add(req, res){
        const {title, price, img} = req.body;
        const newProduct = new Store( {title, price, img} );
        await newProduct.save();
        res.status(201).json(newProduct)
}

    static async show(req, res){
        let query = {};
        const show = await Store.find(query).lean();
        res.status(201).json(show);
    }

    static async edit(req, res){
        const {_id, title, price, img} = req.body
        const editPorudct =  await Store.findByIdAndUpdate(_id,{ title, price,  img });
        res.status(201).json(editPorudct)
    }

    static async delete(req, res){
        const {_id} = req.body;
        await Store.findByIdAndDelete(_id)
        res.status(201).json("Deletado")
    }

}

module.exports = StoreController