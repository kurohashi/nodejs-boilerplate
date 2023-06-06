let moment = require("moment-timezone");
let conf = require("../../configs/app.conf");
let uuidv4 = require("uuid/v4");
let console = conf.console;


module.exports=function(schema){
	if(!schema.id)
	{
		schema.add({id : String})

		schema.pre('save', function(next){
			this.id = uuidv4();
			console.log(this.id);
			next();
		});
	}	
}