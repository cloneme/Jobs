Template.application.helpers({
	currentUser: function () {
			return Meteor.user().username;

	},
});



Template.application.events({
	"submit form": function (e, err) {
		
		e.preventDefault();
		
		var jobId = Session.get('jobId');
		var postedBy = this.author;
		var applicant = Meteor.user().username;
		
		var application = {
			name: $('#name').val(),
			email: $('#email').val(),
			about: $("#about").val(),
			github: $('#github').val(),
			jobId: jobId,
			applicant: applicant,
			postedBy: postedBy,
			submitted: new Date()
			

			

		};

		
		//alert(applicant);
		application._id = Applications.insert(application);

		Router.go('/');
		

	},
});