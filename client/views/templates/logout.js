Template.logout.events({
	"click #logout": function () {
		Meteor.logout(function () {
			alert("You're being logged out!");
		});
	}
});
