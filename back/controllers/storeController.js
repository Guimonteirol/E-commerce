const {db} = require('../db');
const Store = require('../models/storeModel')


class StoreController {

    static async add(req, res){
        try{
        const {title, price, img} = req.body;
        const newProduct = new Store( {title, price, img} );
        await newProduct.save();
        res.status(201).json(newProduct)
        }catch (error) {
            return res.status(404).json({
                'message': `Error ${error.message}`
            })
        }
}

    static async show(req, res){
        try{
        let query = {};
        const show = await Store.find(query).lean();
        res.status(201).json(show);
        }catch (error) {
            return res.status(404).json({
                'message': `Error ${error.message}`
            })
        }
    }

    static async edit(req, res){
        try{
        const {_id, title, price, img} = req.body
        const editPorudct =  await Store.findByIdAndUpdate(_id,{ title, price,  img });
        res.status(201).json(editPorudct)
        }catch (error) {
            return res.status(404).json({
                'message': `Error ${error.message}`
            })
        }
    }

    static async delete(req, res){
        try{
        const {_id} = req.body;
        await Store.findByIdAndDelete(_id)
        res.status(201).json("Deletado")
        }catch (error) {
            return res.status(404).json({
                'message': `Error ${error.message}`
            })
        }
    }

}

module.exports = StoreController