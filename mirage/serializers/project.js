// mirage/serializers/project.js
import BaseSerializer from './application';

export default BaseSerializer.extend({
  include: ['person']
});
