Template.home.helpers({

	noUser: function () {
		var user = Meteor.user();
		
		if (user) {
			return false;
		} else {
			return true;
		};
	}


});