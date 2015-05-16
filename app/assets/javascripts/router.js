window.ToDoRouter = Backbone.Router.extend({
  routes: {
    '': 'root'
  },

  root: function() {
    $.getJSON('/lists', function(listJson) {
      var listModel = new List(listJson[0]);
      var listView = new ListDetails({
        model: listModel,
        el: $('body')
      }).render();
    });
  }
});
