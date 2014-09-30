Template.create.events({ 
	'submit form': function(e) {
    e.preventDefault();

var post = {
	jobTitle: $(e.target).find('[name=jobTitle]').val(),
	shortDescription: $(e.target).find('[name=shortDescription]').val(), 
	url: $(e.target).find('[name=url]').val(),
	schedule: $(e.target).find('[name=schedule]').val(),
	compensation: $(e.target).find('[name=compensation]').val(),
	addedBenefits1: $(e.target).find('[name=addedBenefits1]').val(),
	addedBenefits2: $(e.target).find('[name=addedBenefits2]').val(),
	addedRequirements: $(e.target).find('[name=addedRequirements]').val(),
}
	
	post._id = Jobs.insert(post);

	    Router.go('job', post);
	}
});