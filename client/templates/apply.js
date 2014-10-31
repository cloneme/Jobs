Template.aply.helpers({
	currentUser: function () {
			return Meteor.user().username;

	},
});



Template.aply.events({
	"submit form": function (e, err) {
		
		e.preventDefault();
		
		var postedBy = this.author;
		var applicant = Meteor.user().username;
		
		var application = {
			name: $('#name').val(),
			email: $('#email').val(),
			about: $("#about").val(),
			github: $('#github').val(),
			applicant: applicant,
			postedBy: postedBy,
			submitted: new Date()
			

			

		};

		
		application._id = Applications.insert(application);

		Router.go('/');
		

	},
});