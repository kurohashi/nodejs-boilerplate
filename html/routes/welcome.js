var ctrl = require(__base+"html/controllers/welcome.controller")

// The route urls presented here are going to  
module.exports = function(app){
	app.route("/welcome")
		.get(ctrl);
}