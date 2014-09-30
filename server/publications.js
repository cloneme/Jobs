Meteor.publish('jobs', function() { 
	return Jobs.find();
});

Meteor.publish('applications', function () {
	return Applications.find();
});
