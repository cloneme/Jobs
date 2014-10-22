Template.signup.events({
	"submit form": function (e, err) {
		e.preventDefault();
		var email = $('#email').val();
		var username = $('#username').val();
		var password = $('#password').val();
		alert(email + username + password);
		alert(err);
		console.log(err);

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
