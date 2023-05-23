
const  mongoose = require( 'mongoose' );


let questionSchema = new mongoose.Schema({

  date: {type: String},
  number: {type: Number},
  question: {type: String },
  name: {type: String },
  optiona: {type: String},
  optionb: {type: String},
  optionc: {type: String},
  optiond: {type: String},

 });


module.exports = Question = mongoose.model('question', questionSchema);