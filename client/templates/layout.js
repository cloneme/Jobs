Template.navigation.events({
	"click #logout": function () {
		Meteor.logout(function () {
			alert("You're being logged out! Taking you to the homepage.");
			Router.go('/');
		});
	}
});


// Navigation template helper

Template.navigation.helpers({

	thisUser: function () {
			return Meteor.user().username;

	},

	// noUser: function () {
	// 	var user = Meteor.user();
		
	// 	if (!user) {
	// 		return true;
	// 	};
	// }


});

Template.navigation.helpers({
	username: function () {
		return Meteor.user().username;
	},

	
});

