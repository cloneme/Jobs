Template.application.helpers({
	currentUser: function () {
			return Meteor.user().username;

	},
});



Template.application.events({
	"click #apply": function (e, err) {
		
		var jobId = Session.get('jobId');
		var postedBy = this.author;
		alert(postedBy);
		var applicant = Meteor.user().username;
		
		var application = {
			name: $('#name').val(),
			email: $('#email').val(),
			about: $("#about").val(),
			jobId: jobId,
			applicant: applicant, //Meteor.user().username,
			postedBy: postedBy,
			submitted: new Date()
			

			

		};

		
		alert(applicant);
		application._id = Applications.insert(application);

		Router.go('/');
		

	},
});