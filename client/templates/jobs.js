


// Everything was moved to main.js to improve the initial performance
// Everything was moved to main.js to improve the initial performance
// Everything was moved to main.js to improve the initial performance
// Everything was moved to main.js to improve the initial performance


// job list template helper

Template.jobs.helpers({ 
	jobs: function() {
	return Jobs.find({}, {sort: {submitted: -1}}); },

});