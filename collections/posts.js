Jobs = new Meteor.Collection('jobs');



/*Jobs.deny({
	update: function(userId, post, fields) {
	    // may only edit the following two fields:
	return (_.without(fields, ['organization', 'shortDescription', 'url', 'schedule', 'addedRequirements']).length > 0); }
});*/

Meteor.methods({
	post: function(postAttributes) {
	
	var user = Meteor.user();
	
	    // ensure the user is logged in
	if (!user)
		throw new Meteor.Error(401, "You need to login to post new stories");

	    // pick out the whitelisted keys
	var post = _.extend(_.pick(postAttributes, 'jobTitle', 'shortDescription', 'organization', 'url', 'schedule', 'compensation', 'addedRequirements'), { 
		userId: user._id,
		author: user.username,
		submitted: new Date()
	});
	
	var postId = Jobs.insert(post);
	
		return postId; 
	}

});


