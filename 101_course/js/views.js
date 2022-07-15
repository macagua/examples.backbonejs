// Backbone.js Main App - View Examples
// more Models Examples checkout models.js file
// more Collections Examples checkout collections.js file

// Create a Backbone View
var BookView = Backbone.View.extend({
	tagName: 'h1',

	render: function() {
		this.$el.html('This is a H1');
		return this;
	}
});

// Create a Backbone View Instance
var book = new BookView();

// Show Backbone View Instance at div id selector at index.php file
$('#content').append(book.render().el);

// Show Backbone View Instance(s)
console.log(book);
console.log(book.el);
console.log(book.el.outerHTML);

// Show Backbone View Instance as a jQuery Object
console.log(book.$el);
console.log('Show Backbone View Instance as a jQuery Object');

// Show Backbone View Instance with render function
console.log(book.render().el.outerHTML);
console.log('Show Backbone View Instance with render function');

// Show Backbone View Instance as a jQuery Object with render function
console.log(book.render().$el);
console.log('Show Backbone View Instance as a jQuery Object with render function');

// Create a Backbone View from an element that already exists
var BookDivView = Backbone.View.extend({
	el: "#content1",

	render: function() {
		// Create a Backbone View Instance
		var book1 = new BookView();
		this.$el.html(book1.render().el);
		return this;
	}
});

// Create a Backbone View Instance
var bookDiv = new BookDivView();

// Show Backbone View Instance at div id selector at index.php file
bookDiv.render();
