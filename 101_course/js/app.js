// Backbone.js Main App - View Examples
// more Models Examples checkout models.js file
// more Collections Examples checkout collections.js file
// more Views Examples checkout views.js file

// Create a Backbone Model
var Book = Backbone.Model.extend({
	defaults: {
		'id': null,
		'name': null,
		'age': null,
	}
});

// Create a Backbone Collection
var Books = Backbone.Collection.extend({
	url: 'router.php/data',
	model: Book,
});

// Create a Backbone View
var BookView = Backbone.View.extend({
	tagName: 'tr',

	template: _.template( $('#tplBook').html() ),

	render: function() {
		// console.log( this.model );
		// console.log( this.model.toJSON() );
		// console.log( this.template( this.model.toJSON() ) );
		this.$el.html( this.template( this.model.toJSON() ) );
		return this;
	}
});

// Create a Backbone View from an element that already exists
var BookDivView = Backbone.View.extend({

	el: '#content',

	initialize: function(){
		this.listenTo( this.collection, 'sync', this.render );
	},

	// The template render every time, in this case 3 time, because are 3 records
	/* render: function() {
		// console.log( this.collection );
		this.collection.each(function(book){
			// console.log( book );
			var newBook = new BookView({ model: book });
			// console.log( newBook );
			// newBook.render();
			// console.log( newBook.render().el );
			// console.log( newBook.render().$el );
			// console.log( this );
			this.$el.append( newBook.render().$el );
		}, this);
	} */

	// The template render one time, in this case 3 time, because are 3 records
	render: function() {
		var cache = document.createDocumentFragment();
		this.collection.each(function(book){
			var newBook = new BookView({ model: book });
			cache.appendChild( newBook.render().el );
		});
		this.$el.append(cache);
	}
});

// Create a Backbone Collection Instance
var books = new Books();

// Create a Backbone View Instance
var bookTableDiv = new BookDivView({
	collection: books,
});

books.fetch();

// Create a Backbone Model Instance
var book = new Book();

// Set an attribute at Backbone Model Instance
book.set('name', 'The Bible');

// Show Backbone Model Instance
console.log( book );

// Show an attribute at Backbone Model Instance
console.log( book.get('name') );
