describe('tasks collection', function() {
  it('has a url based on the list id', function() {
    var collection = new Tasks([], { list: new Backbone.Model({ id: 123 }) });

    expect(collection.url()).toEqual('/lists/123/tasks');
  });
});
