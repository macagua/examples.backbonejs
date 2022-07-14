// Backbone.js Collections Examples

/*
var a = new Book({ title: 'title 1', author: 'author 1' }),
    b = new Book({ title: 'title 2', author: 'author 2' }),
    c = new Book({ title: 'title 3', author: 'author 3' });
*/
// > New Model Instance has been created
// > New Model Instance has been created
// > New Model Instance has been created


// var books = new BooksCollection([a, b]);
// > undefined

// books.toJSON();
// > (2) [{…}, {…}]

// books.add(c);
// > r {cid: 'c3', attributes: {…}, _changing: false, _previousAttributes: {…}, changed: {…}, …}

// books.toJSON();
// > (3) [{…}, {…}, {…}]

// books.remove(a);
// > r {cid: 'c1', attributes: {…}, _changing: false, _previousAttributes: {…}, changed: {…}, …}

// books.toJSON();
// > (2) [{…}, {…}]

// books.remove([b, c]);
// > (2) [r, r]

// books.toJSON();
// > []

// var d = new Book({ title: 'New title', author: 'Unknown', id:6 });
// > New Model Instance has been created

// var books = new BooksCollection([d]);
// > undefined

// gettedModel = books.get(6);
// > r {cid: 'c1', attributes: {…}, _changing: false, _previousAttributes: {…}, changed: {…}, …}

// gettedModel.toJSON();
// > {title: 'New title', author: 'Unknown', id: 6}

// var books = new BooksCollection();
// > undefined

// books.on('add', function(){ console.log('A new model was added to the collection.'); });
// > r {length: 0, models: Array(0), _byId: {…}, _events: {…}}

// books.add([{ title: 'title 1', author: 'author 1' }, { title: 'title 2', author: 'author 2' }]);
// > New Model Instance has been created
// > A new model was added to the collection.

// books.on('change', function(model){ console.log('The model with title: ' + model.title + ' changed.'); });
// > r {length: 0, models: Array(0), _byId: {…}, _events: {…}}

// books.set([{ id: 1, title: 'title 1', author: 'DecCode.la' }, { id: 6, title: 'title 6', author: 'author 6' }]);
// > New Model Instance has been created
// > A new model was added to the collection.

// books.reset([{ title: 'Plone Professional Book', author: 'Leonardo Caballero' }]);
// > New Model Instance has been created

// books.toJSON();
// > [{…}]

// books.reset();
// > New Model Instance has been created
// > undefined

// books.toJSON();
// > []

// var books = new BooksCollection();
// > undefined

// books.fetch();
// > {readyState: 1, getResponseHeader: ƒ, getAllResponseHeaders: ƒ, setRequestHeader: ƒ, overrideMimeType: ƒ, …}
// > New Model Instance has been created

// books.toJSON();
// > (4) [{…}, {…}, {…}, {…}]

var BooksCollection = Backbone.Collection.extend({

  model: Book,

  url: '/books/'

  /*
  initialize: function() {
    console.log('New Collection instance has been created');
  },
  */
});

