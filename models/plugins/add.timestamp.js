let moment = require("moment-timezone");
let conf = require("../../configs/app.conf");
let console = conf.console;

module.exports = function timestamp(schema) {
	// Add the two fields to the schema
	schema.add({ 
	  creationTS: {
			type:Number,
			immutable:true
		},
	  updateTS: Number
	})
  
	// Create a pre-save hook
	schema.pre('save', addTS);
	schema.pre('findOneAndUpdate', addTS);
	schema.pre('update', addTS);
	schema.pre('updateOne', addTS);
	schema.pre('updateMany', addTS);
  }

  function addTS(next){
		console.error(">>>>>", this);
	let now = moment().unix();
	   
		this.updateTS = now
		// Set a value for createdAt only if it is null
		if (!this.creationTS) {
		  this.creationTS = now
		}
	   // Call the next function in the pre-save chain
	   next()  
  }