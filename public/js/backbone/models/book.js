// Backbone.js Models Examples

// var firstBook = new Book ({
//   title: 'Odyssey',
//   author: 'Homero',
//   category: 'Literature',
// });

// firstBook.toJSON();
// > {title: 'Odyssey', author: 'Homero', category: 'Literature'}

// firstBook.get('title');
// > 'Odyssey'

// firstBook.get('author');
// > 'Homero'

// firstBook.set('author', 'Unknown');
// firstBook.set({
//   title: 'Homer\'s Odyssey',
//   author: 'Ὅμηρος Hómēros',
//   category: 'Unknown',
// });

// firstBook.toJSON();
// > {title: "Homer's Odyssey", author: 'Ὅμηρος Hómēros', category: 'Unknown'}

// var secondBook = new Book ();
// > New instance has been created

// var thirdBook = new Book ({
//   title: 'Homer\'s Odyssey',
// });
// > New instance has been created

// thirdBook.toJSON();
// > {title: "Homer's Odyssey", author: 'Unknown'}

// var fourthBook = new Book ({
//   title: 'The Metamorphosis',
//   author: 'Kafka',
// });
// > New instance has been created

// fourthBook.toJSON();
// > {title: 'The Metamorphosis', author: 'Kafka'}

// fourthBook.set('author', 'Franz Kafka');
// > The Model changed

// var fifthBook = new Book ({
//   id: '1',
// });
// > New instance has been created

// fifthBook.fetch();

// fifthBook.toJSON();
// > {id: '1', author: 'Unknown', title: 'Los perros hambrientos', author: 'Ciro Alegria', categoria: 'Literature'}

// var sixthBook = new Book ({
//   title: 'Demian',
//   author: 'Herman Hesse',
//   category: 'Literature',
// });
// > New instance has been created
// sixthBook.save();

// sixthBook.set('category', 'Unknown');
// > The Model changed
// sixthBook.save();

// sixthBook.destroy();

// var seventhBook = new Book ({
//   title: '',
//   author: 'J.J. Benitez',
//   category: 'Literature',
// });

// seventhBook.save();
// > Should be have a title

// seventhBook.set('author', 'Juan José Benítez López', {validate:true});
// > Should be have a title

// #############################################################################

var Book = Backbone.Model.extend({

  initialize: function() {
    console.log('New instance has been created');
    this.on('change', function() {
      console.log('The Model changed');
    });
  },

  defaults: {
    author: 'Unknown',
  },

  validate: function(attributes) {
    if(!attributes.title){
      // return 'Should be have a title';
      return console.log('Should be have a title');
    }
  },

  urlRoot: '/books',
});

