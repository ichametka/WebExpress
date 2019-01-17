'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
	res.render('Subject', { title: 'Subjects' });
});

module.exports = router;
