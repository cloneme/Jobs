// Template.login.helpers({
// 	yesUser: function () {
// 		var user  = Meteor.user();
// 		if (user) {
// 			return true;
// 		};
// 	},


// 	noUser: function () {
// 		var user = Meteor.user();
		
// 		if (!user) {
// 			return true;
// 		};

// 	}


// });


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
