Template.application.helpers({
	currentUser: function () {
			return Meteor.user().username;

	},
});



Template.application.events({
	"click #apply": function (e) {
		
		var jobId = Session.get('jobId');
		
		

		var application = {
			name: $('#name').val(),
			about: $("#about").val(),
			jobId: jobId,
			applicant: Meteor.user().username,
			//postedBy: jobId.username

			

		};

		
		alert("Hiya!");
		application._id = Applications.insert(application);

		Router.go('/jobs');
		

	},
});