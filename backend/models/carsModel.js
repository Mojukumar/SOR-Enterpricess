const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    brand:{ type:String, require:true },
    name:{ type:String, require:true },
    image:{ type:String, require:true },
    price:{ type:Number, require:true },
    rent:{ type:Number, require:true },
});

module.exports = new mongoose.model("cars", carSchema);
