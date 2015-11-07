var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([{id:1, first_name:'tal', last_name:'peretz'}])
});

router.get('/:id', function(req, res, next){
  res.send({id:1, title:'tal', timestamp:'2015-12-32'})
});

module.exports = router;
