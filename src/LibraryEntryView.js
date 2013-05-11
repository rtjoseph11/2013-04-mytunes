var LibraryEntryView = Backbone.View.extend({

  initialize: function() {
    this.model.on('change', function() {
      this.render();
    },this);
  },

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td>Count: <%= playCount %></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
