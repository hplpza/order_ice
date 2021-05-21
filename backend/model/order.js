const mongoose = require('mongoose')

const orderSchema = mongoose.Schema(
{


userName: {type: String, required:true},
Email:  {type: String, required:true}   ,
PlacedOrder:  {type: String, required:true},

}
);

module.exports = mongoose.model("Order", orderSchema);