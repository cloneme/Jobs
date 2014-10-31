

//notFound template helper for undefined paths

Template.notFound.events({
	"click #yes": function  () {
		Router.go('home')
	},

	"click #no": function () {
		Router.go('https://google.com')
	}

});
