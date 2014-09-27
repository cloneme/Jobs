Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { 
		return Meteor.subscribe('posts'); 
		return Meteor.subscribe('applications');
	}
});


Router.map(function() { 
	this.route('postsList', {path: '/'}); //main route

	this.route('about', {path: '/about'}); //about route

	this.route('postPage', { //
		path: '/posts/:_id',
		data: function() { return Posts.findOne(this.params._id); }	//
	});

	this.route('postSubmit', { //submit-page
		path: '/submit',
	});

	this.route('applyJob', { //apply
		path: '/apply',
	});
});

Router.onBeforeAction('loading');