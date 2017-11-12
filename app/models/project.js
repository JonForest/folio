import DS from 'ember-data';
const {attr, hasMany} = DS

export default DS.Model.extend({
  name: attr('string'),
  status: attr('string'),
  people: hasMany('person', { async: false }),
  workingDays: hasMany('working-day', { async: false })
});
