Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	
	waitOn: function() { return Meteor.subscribe('myjobs'), Meteor.subscribe('jobs'), Meteor.subscribe('applications') }
});


Router.map(function() { 
	
	this.route('jobs', {
		path: '/jobs',
		data: function () { return Jobs.find(); },
	});


	this.route('home', {
		path: '/',
	});

	
	
	this.route('profle', {
		path: '/profle',
	});

	this.route('crte', {
		path: '/crte',
	});
	
	this.route('aply', {
		path: '/jobs/aply/:_id',
		data: function(){ return Jobs.findOne(this.params._id); },
	});




	this.route('job', {
		path: '/jobs/:_id',
		data: function() { return Jobs.findOne(this.params._id);  },
	});


	
	this.route('viewapp', {
		path: '/applied/:_id',
		data: function() {return Applications.findOne(this.params._id); },
		
	});

	this.route('jobEdit', {
		path: '/jobs/:_id/edit',
		data: function() { return Jobs.findOne(this.params._id); },


	});

	this.route('signup', {
		path: '/signup',
	});

	this.route('login', {
		path: '/login',
	});


	this.route('contact', {
		path: '/contact',
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
};


// Router.onBeforeAction(requireLogin, {only: 'crte'});
// Router.onBeforeAction(requireLogin, {only: 'aply'});
// Router.onBeforeAction(requireLogin, {only: 'profle'});
// Router.onBeforeAction(requireLogin, {only: 'jobEdit'});
// Router.onBeforeAction(requireLogin, {only: 'viewapp'});
Router.onBeforeAction('dataNotFound', {only: 'job'});
Router.onBeforeAction('dataNotFound', {only: 'viewapp'});



