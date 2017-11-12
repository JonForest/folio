import { Factory, association } from 'ember-cli-mirage';

export default Factory.extend({
  date: new Date(),
  person: association(),
  project: association()
});
