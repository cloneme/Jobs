Meteor.publish('jobs', function() { 
	return Jobs.find();
});

Meteor.publish('applications', function () {
	return Applications.find();
});

Meteor.publish('myjobs',function() {
	return Jobs.find({userId:this.userId})
});

