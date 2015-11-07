var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id/posts', function(req, res, next) {
    res.send([{id:1, title:'tal'}, {id:2, title:'reut'}])
});

module.exports = router;
