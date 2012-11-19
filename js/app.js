var App = Ember.Application.create();

App.ApplicationController = Ember.Controller.extend();
App.ApplicationView = Ember.View.extend({
  templateName: 'application'
});
App.Person = Ember.Model.extend({
  firstName: Ember.attr('string'),
  lastName: Ember.attr('string'),
  fullName: function() {
    return this.get('firstName') +
           " " + this.get('lastName');
  }.property('firstName', 'lastName')
});
App.peopleController = Ember.ArrayController.create({
  content: App.Person.findAll()
});
App.Router = Ember.Router.extend({
  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/'
    })
  })
})

App.initialize();