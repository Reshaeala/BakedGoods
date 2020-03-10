const mongoose = require('mongoose');
const Schema = mongoose.Schema

const BakingSchema = new Schema ({
  name: {type:String},
  description: {type:String},
  image: {type: String},
  price: {type:Number},
  qty: {type:Number}
})

const BakingStuff = mongoose.model('BakingCollection', BakingSchema);

module.exports = BakingStuff;
