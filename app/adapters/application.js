import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { inject } from '@ember/service';
import config from 'ember-github-repos/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  @inject('access-token') accessToken;

  get headers() {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github.v3+json',
    };

    if (this.accessToken.token) {
      headers['Authorization'] = `token ${this.accessToken.token}`;
    }

    return headers;
  }

  get namespace() {
    if (config.environment === 'test') {
      return '/api';
    }

    return 'https://api.github.com';
  }
}
