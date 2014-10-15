Template.jobs.helpers({ 
	jobs: function() {
	return Jobs.find({}, {sort: {submitted: -1}}); }
});

Template.myjobs.jobs = function()
{
	return Jobs.find({userId:Meteor.user()._id});
}