Jobs.allow({
  update: ownsDocument,
  remove: ownsDocument,
});

Jobs.deny({
	remove: !ownsDocument
});

Applications.allow({
  insert: function()
  {
  	return true;
  }
});
