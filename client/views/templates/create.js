Template.crte.events({ 
	'submit form': function(e) {
	    e.preventDefault();

		var post = {
			jobTitle: $(e.target).find('[name=jobTitle]').val(),
			shortDescription: $(e.target).find('[name=shortDescription]').val(),
			organization: $(e.target).find('[name=organization]').val(),
			url: $(e.target).find('[name=url]').val(),
			schedule: $(e.target).find('[name=schedule]').val(),
			compensation: $(e.target).find('[name=compensation]').val(),
			addedRequirements: $(e.target).find('[name=addedRequirements]').val(),

		}
		
		

		Meteor.call('post', post, function(error, id) { 
			if (error)
				return alert(error.reason);
	      
	      		Router.go('job', {_id: id});
	    });

   }

});