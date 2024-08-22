import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AccessTokenService extends Service {
  @tracked token = '';

  @action
  updateToken(token) {
    this.token = token;
  }
}
