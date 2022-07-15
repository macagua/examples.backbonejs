// Backbone.js Main App - Collection Examples
// more Models Examples checkout models.js file
// more Collections Examples checkout collections.js file

// Create a Backbone Model
var Data = Backbone.Model.extend({
	defaults: {
		'id': null,
		'name': null,
		'age': null,
	}
});

// Create a Backbone Collection
var DataList = Backbone.Collection.extend({
	url: 'router.php/data',
	model: Data,
});

// Create a Backbone Collection Instance(s)
var dataList = new DataList();

// Wrong way to Show Backbone Collection Object
console.log(dataList);
console.log('Wrong way to Show Backbone Collection Object from API Rest');

// Correct way to show Backbone Collection Object from API Rest
dataList.fetch().then(function () {
	// Show the Backbone Collection Object fetched
	console.log(dataList);
	console.log('Correct way to show Backbone Collection Object from API Rest');
	// Here yo can execute the tasks corresponding to your model...
});

// Correct way to show Backbone Collection Instance from API Rest
dataList.fetch().then(function (obj) {
	// Show the Backbone Collection Instance fetched
	console.log(obj);
	console.log('Correct way to show Backbone Collection Instance from API Rest');
	// Here yo can execute the tasks corresponding to your model...
});
