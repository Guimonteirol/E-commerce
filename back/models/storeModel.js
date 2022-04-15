const { model, Schema } = require("mongoose");

const Store = model("StoreEcommerce", new Schema({
    title:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    // size:{
    //     type: String,
    //     required: true
    // },
    img:{
        type: String,
        required: true
    }
}));

module.exports = Store;