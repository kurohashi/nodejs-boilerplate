var ctrl = require(__base+"html/controllers/404.controller")

// The route urls presented here are going to  
module.exports = function(app){
	app.route("/404")
		.get(ctrl);
}