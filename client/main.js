Meteor.subscribe('jobs');

Template.login.events({
	"click #login": function () {
		var username = $('#username').val();
		var password = $('#password').val();


		Meteor.loginWithPassword(username, password, function (err, success) {
			if (err) {
				alert(err);
			} else {
				Router.go('/jobs');
			}
		});
	}
})

Template.pro.helpers({
	user: function() {
		var user = Meteor.user();
		return user.username;
	},

	userId: function() {
		return Meteor.userId();
	}
});

Template.logout.events({
	"click #logout": function () {
		Meteor.logout(function () {
			alert("You're logged out!");
		});
	}
});

