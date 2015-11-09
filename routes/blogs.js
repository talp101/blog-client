var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id/posts', function(req, res, next) {
    res.send([{id:1, title:'tal'}, {id:2, title:'reut'}, {id:3, title:'tal'}, {id:4, title:'reut'}])
});

module.exports = router;
