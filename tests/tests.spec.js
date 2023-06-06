// this is the test file for /v1/tests/api
var request = require("request");
const base_url = "http://localhost:12115/apis/v1/"
var server = require("../server");
const valid_id = "30727afa-f424-4325-afe4-1ba78ed170ad";
const invalid_id = "3242-03023084902890839";

describe("Test /v1/tests.js", function(){
	describe("APIs for /tests", function() {
		describe("GET ", function() {
			it(base_url+" returns status code 200", function(done){
				request(base_url+"tests", function(err, resp, data){
					console.log(data);					
					expect(resp.statusCode).toBe(200);
					done();
				})
			});	
		});
		// describe("POST ", function() {
		// 	it(base_url+"tests returns status code 201", function(done){
		// 		request.post({
		// 			url:     base_url+"tests",
		// 			json:    [{"email":"923842039@TESTMAIL.com", "name":"A Chand"},{"email":"lksdfjlsjdlk@TESTMAIL.com", "name":"B Kumar "}]
		// 		  }, function(err, resp, data){					
		// 			expect(resp.statusCode).toBe(201);
		// 			done();
		// 		})
		// 	});	
		// });
	});
});

describe("Test /v1/test/:id", function(){
	describe("APIs for /test/:id", function() {
		describe("GET ", function() {
			it(base_url+"test/"+valid_id+" returns status code 200", function(done){
				request(base_url+"test/"+valid_id, function(err, resp, data){
					console.log(data);					
					expect(resp.statusCode).toBe(200);
					done();
				})
			});	
			it(base_url+"test/"+invalid_id+" returns status code 204", function(done){
				request(base_url+"test/"+invalid_id, function(err, resp, data){
					console.log(data);					
					expect(resp.statusCode).toBe(204);
					done();
				})
			});	
		});
	});
});

describe("Test /v1/test/:id", function(){
	describe("APIs for /test/:id", function() {
		describe("GET ", function() {
			it(base_url+"test/"+valid_id+" returns status code 200", function(done){
				request.put({
					url : base_url+"test/"+valid_id,
					json : {email:"jest@test.com"}
				}, function(err, resp, data){
					console.log(data);					
					expect(resp.statusCode).toBe(200);
					done();
				})
			});	
			it(base_url+"test/"+invalid_id+" returns status code 204", function(done){
				request.put({
					url : base_url+"test/"+invalid_id,
					json : {name:"junk test"}
				},function(err, resp, data){
					console.log(data);					
					expect(resp.statusCode).toBe(204);
					done();
				})
			});	
		});
	});
});