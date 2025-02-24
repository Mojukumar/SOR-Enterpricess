const mongoose = require("mongoose");


const bikeSchema = new mongoose.Schema({
    brand:{ type:String, require:true },
    name:{ type:String, require:true },
    image:{ type:String, require:true },
    price:{ type:Number, require:true },
    rent:{ type:Number, require:true },
});

module.exports = new mongoose.model("bikes", bikeSchema);
