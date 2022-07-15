// Backbone.js Main App - Collection Examples
// more Models Examples checkout models.js file

// Create a Backbone Model
var Book = Backbone.Model.extend({
	url: 'router.php/data/1'
});

// Create a Backbone Model Instance(s)
var book = new Book();

// Show the Backbone Model Instance fetched
console.log(book.fetch());

// Correct way to show Backbone Model Instance from API Rest
book.fetch().then(function(obj){
	// Show the Backbone Model Instance fetched
	console.log(obj);
	console.log('Correct way to show Backbone Model Instance from API Rest');
});

// Create a Backbone Model
var Book1 = Backbone.Model.extend({
	defaults: {
		'title': null,
		'author': null,
		'pageNumber': null,
		'popularity': null,
		'visitsNumber': null
	}
});

// Create a Backbone Collection
var BooksList = Backbone.Collection.extend({
	model: Book1,
});

// Create a Backbone Model Instance(s)
var book1 = new Book1({
	'title': 'Python Professional',
	'author': 'Guido van Rossum',
	'pageNumber': 250,
	'popularity': 'Very',
	'visitsNumber': 500,
});

var book2 = new Book1({
	'title': 'Plone en Español',
	'author': 'Leonardo Caballero',
	'pageNumber': 350,
	'popularity': 'Higth',
	'visitsNumber': 500,
});

var book11 = new Book1({
	'title': 'Odoo Professional',
	'author': 'Odoo S.A.',
	'pageNumber': 550,
	'popularity': 'Higth',
	'visitsNumber': 600,
});

// Create a Backbone Collection Instance(s)
var booksList = new BooksList();

// Create a Backbone Collection Instance with some Model(s) structure
var books = new BooksList([
	{
		'title': 'Plone en Chaverre',
		'author': 'Leonardo Caballero',
		'pageNumber': 50,
		'popularity': 'Higth',
		'visitsNumber': 500,
	},
	{
		'title': 'Plone for E-Gov',
		'author': 'Leonardo Caballero',
		'pageNumber': 150,
		'popularity': 'Higth',
		'visitsNumber': 1000,
	}
]);

// Add a Backbone Model into a Collection Instance(s)
booksList.add(book1);

// Add some Backbone Models into a Collection Instance
booksList.add([book2, book11]);

// Show Backbone Model Instance(s)
console.log(book1);
console.log(book2);
console.log(book11);

// Show Backbone Collection Instance(s)
console.log(booksList);
console.log(books);
