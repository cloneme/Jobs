Template.contact.events({
	"submit form": function (e) {
		e.preventDefault();

		var to = $('#to').val();
		var from = $('#from').val();
		var subject = $('#subject').val();
		var text = $('#text').val();
		

		Meteor.call('sendEmail', 
					to, 
					from, 
					subject, 
					text, function (err) {
						if (err) {
							alert(err);
						} else {
							alert('Thanks. The message was sent. Taking you home now!');
							return Router.go('/');
						};
					});

		
		

	
	}

});