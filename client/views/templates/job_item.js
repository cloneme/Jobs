Template.jobItem.helpers({
	ownPost: function() {
	return this.userId == Meteor.userId(); 
	
	},
});