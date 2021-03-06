var StudentView = Backbone.View.extend({
  template: _.template($('#headshot-template').html()),
  descriptionTemplate: _.template($('#student-profile-template').html()),
  tagName: 'li',
  initialize: function(){
    this.listenTo(this.model, 'all', this.render)
  },
  render: function(){
    this.$el.html(this.template(this.model.attributes))
    return this;
  },
  events: {
    'click' : 'renderStudentDesc'
  },
  renderStudentDesc: function() {
    $('.thumbnails').find('.current-student').removeClass('current-student');
    $(this.el).addClass('current-student');

    var container = $('.student-desc');
    container.html('');
    container.html(this.descriptionTemplate(this.model.attributes));
  }
})
