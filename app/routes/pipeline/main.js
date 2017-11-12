import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    // Need to fetch all people, projects and allocation here
    return this.store.findAll('project', { include: 'people' })
    //return this.store.findAll('project', { include: 'people,workingDays' })
  }
});
