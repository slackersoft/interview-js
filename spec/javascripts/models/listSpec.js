describe('list model', function() {
  it('has a list of tasks', function() {
    var list = new List();
    var tasks = list.tasks();

    expect(tasks.list).toBe(list);
  });

  it('should fetch the tasks', function() {
    var list = new List();
    var tasks = list.tasks();

    expect(jasmine.Ajax.requests.mostRecent()).toBeDefined();
    expect(jasmine.Ajax.requests.mostRecent().url).toEqual(tasks.url());
  });

  it('retrieves the same collection a second time', function() {
    var list = new List();
    var tasks = list.tasks();

    jasmine.Ajax.requests.reset();

    expect(list.tasks()).toBe(tasks);
    expect(jasmine.Ajax.requests.mostRecent()).toBeUndefined();
  });
});
