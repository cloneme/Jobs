Template.jobEdit.events({ 
	'submit form': function(e) {
	    e.preventDefault();
		
		var currentPostId = this._id;
		
		var postProperties = {
			jobTitle: $(e.target).find('[name=jobTitle]').val(),
			shortDescription: $(e.target).find('[name=shortDescription]').val(),
			organization: $(e.target).find('[name=organization]').val(),
			url: $(e.target).find('[name=url]').val(),
			schedule: $(e.target).find('[name=schedule]').val(),
			compensation: $(e.target).find('[name=compensation]').val(),
			addedRequirements: $(e.target).find('[name=addedRequirements]').val(),
			
		}

		Jobs.update(currentPostId, {$set: postProperties}, function(error) { 
			if (error) {
	        
		        // display the error to the user
				alert(error.reason);
				console.log('Eew!');

			} else {
	        	Router.go('job', {_id: currentPostId});
	        	console.log('Updated');
	    	}
	    });
	},
	
	
	'click .delete': function(e) { 
		e.preventDefault();
	
		if (confirm("Whoa, whoa! Really?")) { 
			var currentPostId = this._id; 
			Jobs.remove(currentPostId); 
			Router.go('jobs');
		} 
	}
});