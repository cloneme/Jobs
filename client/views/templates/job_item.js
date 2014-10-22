Template.jobItem.helpers({

	ownPost: function() {
	return this.userId == Meteor.userId(); 
	
	},

	
});


Template.job.helpers({

	ownPost: function() {
	return this.userId == Meteor.userId(); 
	
	},

});