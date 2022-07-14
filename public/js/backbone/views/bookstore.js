// Backbone.js Views Examples

// var BookStoreView = new BookStore();
// > undefined

// BookStoreView;

// var appView = new BookStore();
// > undefined

// appView.el;
// > <div></div>

// var tagView = new BookStore();
// > undefined

// tagView.el;
// > <span></span>

// var customView = new BookStore();
// > undefined

// customView.el;
// > <span id="myIdName" class="myClassName"></span>

// var elView = new BookStore();
// > undefined

// elView.el;
// > <div class="bookstore-view"> </div>

// var elJqView = new BookStore();
// > undefined

// elJqView.el;
// > <div class="bookstore-view"> </div>

// elJqView.$el;
// > init [div.bookstore-view, prevObject: init(1), context: document, selector: '.bookstore-view']

// elJqView.$el.text('Hola mundo con Backbone.js');
// > init [div.bookstore-view, prevObject: init(1), context: document, selector: '.bookstore-view']

// elJqView.$el.css('background', 'blue');
// > init [div.bookstore-view, prevObject: init(1), context: document, selector: '.bookstore-view']

// elJqView.$el.append('<br><span>Genial</span>');
// > init [div.bookstore-view, prevObject: init(1), context: document, selector: '.bookstore-view']

// elJqView.render();
// > init [div.bookstore-view, prevObject: init(1), context: document, selector: '.bookstore-view']

// var elJqView = new BookStore();
// > New View instance has been created

// var changeColorView = new BookStore();
// > New View instance has been created

/*
var BookStore = Backbone.View.extend({
  // tagName: 'span',
  // className: 'myClassName',
  // id: 'myIdName',
  el: '.bookstore-view',

  initialize: function() {
    console.log('New View instance has been created');
    this.render();
  },

  render: function() {
    this.$el.html('<p>The render method in action!!!</p><br>');
  },

});
*/

var BookStore = Backbone.View.extend({
  el: '.bookstore-view',

  initialize: function() {
    console.log('New View instance has been created');
  },

  events: {
    'click .changeColor': 'changeColor',
  },

  changeColor: function() {
    this.$el.css('color', 'red');
  },

});

