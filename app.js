var express = require('express'),
    path 	= require('path'),
    fs   	= require('fs'),
    uuid   	= require('node-uuid');

var app = express(),
    dataBase = fs.readFileSync('./db.json').toString();

var data = JSON.parse(dataBase);

app.use(express.static(path.join(__dirname, 'public')));

// Add POST, PUT, DELETE methods to the app
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.methodOverride());

// Home page: http:localhost:4000
app.get('/', function (request, response){
	response.sendfile(__dirname + '/index.html');
});

// API REST

// Show all the books
app.get('/books', function(request, response) {
	response.send(data);
});

// Show the book details
app.get('/books/:id', function(request, response, next) {
	var record;

	for (var i=0; i < data.length; i++) {
		var book = data[i];

		if (book.id === request.params.id) {
			record = book;
		}
	}

	if (record) {
		response.send(record);
	} else {
		response.statusCode = 500;
		return response.send('Don\'t found the id.');
	}

});

// POST: Create a new book.
app.post('/books', function (request, response){
	request.body.id = uuid.v1(4);

	data.push(request.body);

	response.send(200, {id: request.body.id});
});

// PUT: Update a book.
app.put('/books/:id', function (request, response){
	var book;

	for (var i = data.length - 1; i >= 0; i--) {
		book = data[i];

		if(book.id === request.params.id){
			data[i] = request.body;
		}
	}

	response.send(200);
});

// DELETE: Delete a book.
app.delete('/books/:id', function (request, response) {

	var deteleRecord;

	for (var i=0; i < data.length; i++) {
		var book = data[i];

		if (book.id === request.params.id) {
			deteleRecord = i;
		}
	}

	data.splice(deteleRecord, 1);

	response.send(200);
	
});

app.listen(4000);
