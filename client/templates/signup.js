Template.signup.events({
	"submit form": function (e, err) {
		e.preventDefault();
		var email = $('#email').val();
		var username = $('#username').val();
		var password = $('#password').val();
		
		
		Accounts.createUser({email: email, username: username, password: password}, function (err) {
			if (err) {
				alert(err);
				return false;
			} else {
				Router.go('/jobs');
			};
		});
	}
});


Template.signup.helpers({

	noUser: function () {
		var user = Meteor.user();
		
		if (user) {
			return false;
			// Route.go('/');
		} else {
			return true;

		};
	}


});