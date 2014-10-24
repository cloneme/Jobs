Template.navigation.events({
	"click #logout": function () {
		Meteor.logout(function () {
			alert("You're being logged out! Taking you to the homepage.");
			Router.go('/');
		});
	}
});