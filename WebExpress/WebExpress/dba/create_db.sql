CREATE TABLE IF NOT EXISTS 'tblSettings' (
	'Name'	TEXT,
	'Value'	TEXT
);
INSERT INTO tblSettings (Name,Value) Values ('DBVersion','1000');
CREATE TABLE IF NOT EXISTS 'tblScheduleType' (
	'Description'	TEXT,
	'OrderIndex' INT
);
INSERT INTO tblScheduleType (Description,OrderIndex) Values ('9:00',1);
INSERT INTO tblScheduleType (Description,OrderIndex) Values ('10:00',2);
INSERT INTO tblScheduleType (Description,OrderIndex) Values ('11:00',3);
CREATE TABLE IF NOT EXISTS 'tblSubject' (
	'Description'	TEXT,
	'Capacity' INT,
	'ColumnIndex' INT
);
INSERT INTO tblSubject (Description,Capacity,ColumnIndex) Values ('Buisness',25,1);
INSERT INTO tblSubject (Description,Capacity,ColumnIndex) Values ('Computer Science',25,2);
INSERT INTO tblSubject (Description,Capacity,ColumnIndex) Values ('Technology',25,3);
INSERT INTO tblSubject (Description,Capacity,ColumnIndex) Values ('Art',25,4);
INSERT INTO tblSubject (Description,Capacity,ColumnIndex) Values ('Dance',25,5);
INSERT INTO tblSubject (Description,Capacity,ColumnIndex) Values ('Drama',25,6);
INSERT INTO tblSubject (Description,Capacity,ColumnIndex) Values ('Music',26,7);