window.TaskDetails = Backbone.View.extend({
  tagName: 'li',

  render: function() {
    this.$el.html(
      "<input type='checkbox' id='task-" + this.model.id + "'>" +
      "<label for='task-" + this.model.id + "'>" + this.model.get('title') + "</label>"
    );

    return this;
  }
});
