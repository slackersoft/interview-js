window.List = Backbone.Model.extend({
  tasks: function() {
    if (!this._tasks) {
      this._tasks = new Tasks([], { list: this });
      this._tasks.fetch({ reset: true });
    }
    return this._tasks;
  }
});
