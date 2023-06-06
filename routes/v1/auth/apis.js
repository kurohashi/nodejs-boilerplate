var ctrl = require("../../../controllers/test.controller");
var utils = require("../../../utils/lib");

// The route urls presented here are going to  
module.exports = function(app){
	app.route("/tests")
		.get(ctrl.getmany)
		.post(ctrl.createmany)
		.put(ctrl.updatemany)
		.delete(ctrl.deletemany)
	
	app.route("/test/:id")
		.get(ctrl.get)
		.put(utils.preupdate, ctrl.update)
		.delete(ctrl.delete)
}	
	

