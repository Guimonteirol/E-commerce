const { model, Schema } = require("mongoose");

const Cart = model("CartEcommerce", new Schema({
    title:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    size:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    }, 
    quant:{
        type: Number,
        required: true
    },
    total:{
        type: Number,
        required: true
    }
}));

module.exports = Cart;