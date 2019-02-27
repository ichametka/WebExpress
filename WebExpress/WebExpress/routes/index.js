'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Schedule Creator 2019' });
});

router.get('/index', function (req, res) {
	res.render('index', { title: 'Schedule Creator 2019' });
});

/* GET Subject page. */
router.get('/subjectadd', function (req, res) {
	console.log('subjectadd')
	res.render('subjectedit', { title: 'Edit' });
});

router.post('/subjectadd', function (req, res) {
	
	console.log(req.body.description)
	console.log(req.body.capacity)
	console.log(req.body.columnIndex)

	// construct the insert statement with multiple placeholders
	// based on the number of rows
	let description = req.body.description;
	let capacity = req.body.capacity;
	let columnIndex = req.body.columnIndex;
	let sql = "INSERT INTO tblSubject (Description,Capacity,ColumnIndex) VALUES ('" + description + "'," + capacity + "," + columnIndex + ")"

	// output the INSERT statement
	console.log(sql);

	db.run(sql, function (err) {
		if (err) {
			return console.error(err.message);
		}
		console.log('Rows inserted');
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
			res.render('Subject', { title: 'Subjects', list: subjects });
		});
	});

	//res.render('contact', {
	//	data: req.body,
	//	errors: errors.mapped()
	//})
	//res.render('subjectedit', { title: 'Edit' });
});

router.post('/subjecttestpost', function (req, res) {

	console.log(req.body)
	//console.log(req.body.columnIndex)
	let data = JSON.parse(req.body);  
	//console.log(data)
	res.send('OK')
});


router.get('/subject', function (req, res) {
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
		res.render('Subject', { title: 'Subjects', list: subjects });
	});
});

/* GET scheduleType. */
router.get('/scheduleType', function (req, res) {
	res.render('scheduleType', { title: 'Schedule Types' });
});


/* GET ABOUT page*/
router.get('/about', function (req, res) {
	res.render('about', { title: 'About' });
});



module.exports = router;
