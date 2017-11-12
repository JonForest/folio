import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name (i) {
    return `Project ${i}`
  },

  status: 'ACTIVE',

  afterCreate (project, server) {
    server.createList('person', 3, { projects: [project] });
  }
});
