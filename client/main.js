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

//notFound template helper for undefined paths

Template.notFound.events({
	"click #yes": function  () {
		Router.go('home')
	}

});