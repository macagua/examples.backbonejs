// Backbone.js Main App

// Backbone.js Models Examples

// Create Javascript Hash Structure
var Book = {
	title: 'Backbone',
	author: 'Jeremy Ashkenas',
	pageNumber: 150,
};

var Book2 = {
	title: 'Underscore',
	author: 'Jeremy Ashkenas',
	pageNumber: 260,
};

// Make a Function
var BookTemplate = function(obj) {
	this.title = obj.title;
	this.author = obj.author;
	this.pageNumber = obj.pageNumber;
};

// Create a Function Instance
var book = new BookTemplate({
	title: 'Underscore',
	author: 'Jeremy Ashkenas',
	pageNumber: 260,
});

// Create a Backbone Model
var Book1 = Backbone.Model;
var Book2 = Backbone.Model.extend({
	defaults: {
		'title': null,
		'author': null,
		'pageNumber': null,
		'popularity': null,
		'visitsNumber': null
	}
});

// Create a Backbone Model Instance(s)
var book1 = new Book1();
var book2 = new Book1();
var book3 = new Book1({
	'title': 'Odoo Professional',
	'author': 'Odoo S.A.'
});
var book4 = new Book2({
	'title': 'Python Professional',
	'author': 'Guido van Rossum',
	'pageNumber': 250,
	'popularity': 'Very',
	'visitsNumber': 500,
});

// Set new attribute(s) for a Backbone Model Instance(s)
book1.set('title', 'Backbone JS');
book1.set('author', 'Jeremy Ashkenas');
book2.set({
	'title': 'Plone en Español',
	'author': 'Leonardo Caballero'
});

// Show Backbone Model Instance(s)
console.log(book1);
console.log(book2);
console.log(book3);
console.log(book4);

// Show attribute(s) for Backbone Model Instance(s)
console.log(book1.toJSON());
console.log(book2.toJSON());
console.log(book3.toJSON());
console.log(book4.toJSON());
