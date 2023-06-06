'use strict';
var send = require("../configs/response.conf");
var conf = require("../configs/app.conf");
let testModel = require("../models/tests.model");
let console = conf.console;


module.exports ={
	getmany 	: 	getmany,
	createmany 	: 	createmany,
	updatemany 	: 	updatemany,
	deletemany 	: 	deletemany,
	get			:	get,
	update		:	update,
	delete		:	del
}

function getmany(req, res){
	console.log("called get many", req.query, req.headers)
	testModel.find({},function(err, tests){
		console.log(tests, err);
		if(err)
		{
			console.log(err);
			return send.serverError(res);
		}
		if(!tests.length)
			return send.noData(res);
		return send.ok(res, tests);
	})
};

function createmany(req, res){
	console.log("called create many", req.query, req.headers, req.body);
	testModel.create(req.body)
		.then(function(doc){
			console.log(doc)
			return send.created(res);
	  	})
		.catch(function(err){
			console.error(err)
			return send.failure(res);
	 	 })
}

function updatemany(req, res){
	return send.ok(res);
}

function deletemany(req, res){
	return send.ok(res);
}

function get(req, res){
	console.info(req.params);
	testModel.find({id:req.params.id},{_id:0, id:0, __v:0 }, function(err, result){
		if(err)
		{
			console.error(err);
			return send.serverError(res);
		}
		if(!result.length)
			return send.noData(res);
		return send.ok(res, result);
	})
}

function del(req, res){
	console.log(req.params);
	return send.ok(res);
}

function update(req, res){
	// console.warn(testModel.schema.obj);
	testModel.findOneAndUpdate({id:req.params.id}, req.body,{upsert:false, new:true}, function(err, doc){
		if(err)
		{
			console.error(err);
			return send.serverError(res);
		}
		if(!doc)
			return send.noData(res);
		console.log(doc);
		return send.ok(res);
	})
}