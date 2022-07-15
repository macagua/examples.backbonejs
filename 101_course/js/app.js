// Backbone.js Main App, more Models Examples checkout models.js file

// Create a Backbone Model
var Book = Backbone.Model.extend({
	url: 'router.php/data/1'
});

// Create a Backbone Model Instance(s)
var book = new Book();

// Show the Backbone Model Instance fetched
console.log(book.fetch());

// Set new attribute(s) for a Backbone Model Instance(s)
book.fetch().then(function(obj){
	// Show the Backbone Model Instance fetched
	console.log(obj);
});
