Template.application.helpers({
	currentUser: function () {
			return Meteor.userId();

	},
});

Template.application.events({
	"click #apply": function (e) {
		
		var jobId = Session.get('jobId');


		var application = {
			name: $('#name').val(),
			about: $("#about").val(),
			jobId: jobId

		}
		
		alert("Hiya!");
		application._id = Applications.insert(application);

		Router.go('/jobs');
		

	},
});