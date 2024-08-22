import JSONAPIAdapter from '@ember-data/adapter/json-api';
import config from 'ember-github-repos/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  get headers() {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github.v3+json',
    };

    return headers;
  }

  get namespace() {
    if (config.environment === 'test') {
      return '/api';
    }

    return 'https://api.github.com';
  }
}
