import DS from 'ember-data';
const {attr, belongsTo} = DS

export default DS.Model.extend({
  date: attr('data'),
  project: belongsTo('project', { async: false }),
  person: belongsTo('person', { async: false })
});
