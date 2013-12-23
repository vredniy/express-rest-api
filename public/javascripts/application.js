window.Places = Ember.Application.create({
  LOG_TRANSITIONS: true
});

Places.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api'
});

Places.Store = DS.Store.extend({
  revision: 12,
  adapter: Places.ApplicationAdapter
});

Places.Router.map(function() {
  this.resource('places', { path: '/' });
});

Places.Place = DS.Model.extend({
  _id: DS.attr('string'),
  name: DS.attr('string')
});

Places.PlacesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('place');
  }
});
