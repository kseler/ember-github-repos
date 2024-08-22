import Model, { attr } from '@ember-data/model';

export default class RepositoryModel extends Model {
  @attr('string') name;
  @attr('string') htmlUrl;
  @attr('string') language;
  @attr('boolean') private;
  @attr('string') fullName;
}
