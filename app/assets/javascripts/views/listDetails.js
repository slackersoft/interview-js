window.ListDetails = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model.tasks(), 'reset', this.render);
  },

  render: function() {
    var list = $('<ul class="tasks">');

    list.append(this.model.tasks().map(function(task) {
      return new TaskDetails({model: task}).render().el;
    }));

    this.$el.empty().append(list);

    return this;
  }
});
