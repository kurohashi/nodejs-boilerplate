var express = require('express');
var router = express.Router();
var consign = require('consign');

consign({ cwd:"html", extensions: [ '.js' ]})
  .include('routes')
  .into(router);
module.exports = router;