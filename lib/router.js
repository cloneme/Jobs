Router.configure({
	layoutTemplate: 'layout', //layout template
	loadingTemplate: 'loading',
	
	waitOn: function() { Meteor.subscribe('myjobs'), Meteor.subscribe('jobs') }
});


Router.map(function() { 
	this.route('home', {
		path: '/',
		waitOn: function() {Meteor.subscribe('applications') }

	});

	this.route('signup', {
		path: '/signup',
	});

	this.route('contact', {
		path: '/contact',
	});
 	
	// this.route('pro', { // Profile in future
	// 	path: '/profile',

	// });


	this.route('jobs', {
		path: '/jobs',
	});

	this.route('login', {
		path: '/login'
	});

	this.route('job', {			//routes to the job template //individual job view
		path: '/jobs/:_id',		//takes the corresponding id of the post
		data: function() { return Jobs.findOne(this.params._id);  }		//finds a post with an id corresponding to the path
	});

	this.route('jobEdit', {
		path: '/jobs/:_id/edit',
		data: function() { return Jobs.findOne(this.params._id); }

	});

	this.route('create', {
		path: '/create',
	});

	this.route('application', {
		path: '/jobs/:_id/apply',
		data: function(){ Session.set('jobId', this.params._id);return Jobs.findOne(this.params._id); }
	});

	this.route('viewapp', {
		path: '/applied/:_id',
		data: function() {return Applications.findOne(this.params._id)},
		waitOn: function() {Meteor.subscribe('applications') }
	});

	this.route('notFound', { 
		path: '*',
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
Router.onBeforeAction(requireLogin, {only: 'application'});



