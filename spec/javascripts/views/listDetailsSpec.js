describe('list details view', function() {
  beforeEach(function() {
    this.list = new Backbone.Model();
    this.collection = new Backbone.Collection([{title: 'foo'}, {title: 'bar'}, {title: 'baz'}, {title: 'quux'}]);
    var self = this;
    this.list.tasks = function() {
      return self.collection;
    };
  });

  it('should show the tasks for the list', function() {
    var view = new ListDetails({ model: this.list });
    view.render();

    expect(view.$el.find('ul.tasks li').length).toEqual(4);
  });

  it('should update items when the tasks collection is reset', function() {
    var view = new ListDetails({ model: this.list });
    view.render();

    this.collection.reset([{title: 'bar'}, {title: 'baz'}, {title: 'quuuux'}]);

    expect(view.$el.find('ul.tasks li').length).toEqual(3);
    expect(view.$el.find('ul.tasks').text()).not.toMatch(/foo/);
    expect(view.$el.find('ul.tasks').text()).toMatch(/bar/);
    expect(view.$el.find('ul.tasks').text()).toMatch(/baz/);
    expect(view.$el.find('ul.tasks').text()).not.toMatch(/quux/);
    expect(view.$el.find('ul.tasks').text()).toMatch(/quuuux/);
  });
});
