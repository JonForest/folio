import DS from 'ember-data';
const {attr, hasMany} = DS

export default DS.Model.extend({
  name: attr('string'),
  type: attr('string'),
  projects: hasMany('project', { async: false }),
  workingDays: hasMany('working-day', { async: false })
});
