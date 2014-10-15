Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	//waitOn: function() { 
		//return Meteor.subscribe('jobs'); 
		//return Meteor.subscribe('applications');
	//}
});

Router.map(function() { 
	this.route('home', {
		path: '/',
	});

	this.route('jobs', {
		path: '/jobs'
	});

	this.route('login', {
		path: '/login'
	});

	this.route('job', {
		path: '/jobs/:_id',
		data: function() { return Jobs.findOne(this.params._id);  }
	});

	this.route('jobEdit', {
		path: '/jobs/:_id/edit',
		data: function() { return Jobs.findOne(this.params._id); }
	});

	this.route('myjobs', {
		path: '/myjobs',
		waitOn: function() { Meteor.subscribe('myjobs') }
	});


	
	this.route('create', {
		path: '/create',
	});

	this.route('application', {
		path: '/jobs/:_id/apply',
		data: function(){ Session.set('jobId', this.params._id);return Jobs.findOne(this.params._id); }
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



