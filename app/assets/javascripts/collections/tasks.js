window.Tasks = Backbone.Collection.extend({
  initialize: function(models, options) {
    this.list = options.list;
  },

  url: function() {
    return "/lists/" + this.list.id + "/tasks";
  }
});
