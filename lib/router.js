Router.configure({
	layoutTemplate: 'layout', //layout template
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	
	waitOn: function() { Meteor.subscribe('myjobs'), Meteor.subscribe('jobs'), Meteor.subscribe('applications') }
});


Router.map(function() { 
	
	this.route('jobs', {
		path: '/jobs',
		data: function () { return Jobs.find(); }
	});


	this.route('home', {
		path: '/',
	});

	
	this.route('signup', {
		path: '/signup',
	});

	this.route('login', {
		path: '/login'
	});


	
	this.route('create', {
		path: '/create',
	});

	this.route('application', {
		path: '/jobs/:_id/apply',
		data: function(){ Session.set('jobId', this.params._id); return Jobs.findOne(this.params._id); }
	});

	this.route('viewapp', {
		path: '/applied/:_id',
		data: function() {return Applications.findOne(this.params._id)},
		waitOn: function() {Meteor.subscribe('applications') }
	});

	
	this.route('job', {			//routes to the job template //individual job view
		path: '/jobs/:_id',		//takes the corresponding id of the post
		data: function() { return Jobs.findOne(this.params._id);  },		//finds a post with an id corresponding to the path
		dataNotFoundTemplate: 'notFound',
	});


	this.route('jobEdit', {
		path: '/jobs/:_id/edit',
		data: function() { return Jobs.findOne(this.params._id); },


	});

	this.route('contact', {
		path: '/contact',
	});

	this.route('profile', {
		path: '/profile',
	});
	
	
	// this.route('notFound', { 
	// 	path: '*',
	// });

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
Router.onBeforeAction(requireLogin, {only: 'profile'});



