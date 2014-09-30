Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	//waitOn: function() { 
		//return Meteor.subscribe('jobs'); 
		//return Meteor.subscribe('applications');
	//}
});

Router.map(function() { 
	this.route('jobs', {
		path: '/jobs'});

	this.route('job', {
		path: '/jobs/:_id',
		data: function() { return Jobs.findOne(this.params._id); }
	});

	this.route('create', {
		path: '/create',
	});

	this.route('appli', {
		path: '/apply',
	});

	this.route('about', {
		path: '/about',
	});
});


var requireLogin = function(pause) { 
	if (! Meteor.user()) {
		if (Meteor.loggingIn()) 
			this.render(this.loadingTemplate);
		else 
			this.render('accessDenied');
		
		pause(); 
	}
}

Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, {only: 'create'});