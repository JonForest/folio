import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name (i) {
    return `first${i} second${i}`
  },

  status: 'ACTIVE',

  // afterCreate (person, server) {
  //   server.createList('project', 3, {people: person})
  // }
});
