
const  mongoose = require( 'mongoose' );


let productSchema = new mongoose.Schema({

  date: {type: String},
  question: {type: String },
  

 });

//module.exports = Product= mongoose.model('productstat', productSchema); 
module.exports = Product= mongoose.model('sales', productSchema);