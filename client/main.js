Template.login.events({
	"submit form": function (e, err) {
		e.preventDefault();
		
		var username = $('#username').val();
		var password = $('#password').val();

		
		Meteor.loginWithPassword(username, password, function (err, success) {
			if (err) {
				alert(err);
			} else {
				alert("You're being logged in. Now let's go home!");
				Router.go('/');
			}
		});
	}
})



//notFound template helper for undefined paths

Template.notFound.events({
	"click #yes": function  () {
		Router.go('home')
	},

	"click #no": function () {
		Router.go('https://google.com')
	}

});

Template.navigation.helpers({

	currentUser: function () {
			return Meteor.user().username;

	},

	noUser: function () {
		var user = Meteor.user();
		
		if (user) {
			return false;
		} else {
			return true;
		};
	}


});