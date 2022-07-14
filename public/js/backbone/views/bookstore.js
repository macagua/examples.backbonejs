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

// ########################################################################################################

// Backbone.js Templates Examples

// var sampleTemplate = _.template($('#tplSample').html());
// > undefined

// $('body').append(sampleTemplate);
// > init [body, prevObject: init(1), context: document, selector: 'body']

// $('body').append(sampleTemplate);
// > init [body, prevObject: init(1), context: document, selector: 'body']

// $('body').append(sampleTemplate);
// > init [body, prevObject: init(1), context: document, selector: 'body']

// var loremIpsumView = new loremIpsum();
// > New View instance has been created

// loremIpsumView;
// > undefined

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

/*
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
*/

/*
var loremIpsum = Backbone.View.extend({
  template: _.template($('#tplSample').html()),

  initialize: function() {
    console.log('New View instance has been created');
    this.render();
  },

  render: function() {
    $('body').append(this.template);
    $('body').append(this.template);
    $('body').append(this.template);
  },

});
*/

var app = app || {};

var BookStoreView = Backbone.View.extend({
  el: '#app',

  initialize: function() {
    console.log('New View instance has been created');
    app.booksList.on('add', this.showBook);
    app.booksList.fetch();
    app.booksList.toJSON();
  },

  showBook: function(model) {
    // console.log(model.toJSON());
    var view = new ShowBookView({model:model});
    $('.books').append(view.render().$el);
  },

});

var ShowBookView = Backbone.View.extend({
  template: _.template($('#tplShowBook').html()),

  render: function() {
    this.$el.html( this.template( this.model.toJSON() ) );
    return this;
  },

});

var appView = new BookStoreView();

