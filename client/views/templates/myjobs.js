// Helper for 'myjobs' template

Template.myjobs.helpers({
	
	jobs: function  () {
		return Jobs.find({userId: Meteor.user()._id});	
	},

	notPosted: function () {
		
		if (Jobs.find({userId: Meteor.user()._id}).count() === 0) {
			return true;
		};
	},

	// noUser: function () {
	// 	var user = Meteor.user();
		
	// 	if (user) {
	// 		return false;
	// 	} else {
	// 		return true;
	// 	};
	// }
});

