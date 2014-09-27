Meteor.publish('posts', function() { 
	return Posts.find();
});

Meteor.publish('appliactions', function () {
	return Applications.find();
});
