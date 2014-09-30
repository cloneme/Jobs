Jobs = new Meteor.Collection('jobs');

Jobs.allow({
insert: function(userId, doc) {
    // only allow posting if you are logged in
return !! userId; }
});


Applications = new Meteor.Collection('applications');