describe('task details view', function() {
  beforeEach(function() {
    this.task = new Backbone.Model({ title: 'My Task' });
  });

  it('should render a checkbox and label in an li', function() {
    var view = new TaskDetails({ model: this.task });
    view.render();

    expect(view.el.tagName).toBe('LI');

    expect(view.$el.find('input[type=checkbox]').length).toBe(1);
    expect(view.$el.find('label').text()).toBe(this.task.get('title'));
  });
});
