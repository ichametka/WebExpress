'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
	db.all("SELECT rowid as ID, Description,Capacity,ColumnIndex FROM tblSubject", function (err, rows) {
		var subjects = [];
		for (var i = 0; i < rows.length; i++) {
			var obj = {
				id: rows[i].ID,
				description: rows[i].Description,
				capacity: rows[i].Capacity,
				columnIndex: rows[i].ColumnIndex
			}
			subjects.push(obj);
		}
		res.render('Subject', { title: 'Subjects', list: subjects});
	});
});

router.get('/add', function (req, res) {
	res.render('subjectedit', { title: 'Edit'});
});

module.exports = router;
