import ApplicationAdapter from './application';

export default class RepositoryAdapter extends ApplicationAdapter {
  urlForQuery(query) {
    if (query.org) {
      const url = `${this.namespace}/orgs/${query.org}/repos`;
      delete query.org;
      return url;
    }

    return super.urlForQuery(...arguments);
  }
}
