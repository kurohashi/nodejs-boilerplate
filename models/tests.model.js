let mongoose = require('mongoose');
let validator = require('validator');
let tsPlugin = require('./plugins/add.timestamp');
let idPlugin = require("./plugins/add.id");


let testSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    immutable : true,
    validate: function(value){
		  return validator.isEmail(value);
		}
	},
  name:String,
  newfield: String
})

testSchema.plugin(tsPlugin);
testSchema.plugin(idPlugin);
testSchema.plugin(require("mongoose-immutable-plugin"))

module.exports = mongoose.model('Test', testSchema)