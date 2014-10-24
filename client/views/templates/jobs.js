

Template.jobs.helpers({ 
	jobs: function() {
	return Jobs.find({}, {sort: {submitted: -1}}); },

	

});



Template.myjobs.helpers({
	
	jobs: function  () {
		return Jobs.find({userId: Meteor.user()._id});	
	},

	notPosted: function () {
		
		if (Jobs.find({userId: Meteor.user()._id}).count() === 0) {
			return true;
		};
	}
});