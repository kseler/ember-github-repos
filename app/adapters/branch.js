import ApplicationAdapter from './application';

export default class BranchAdapter extends ApplicationAdapter {
  urlForQuery(query) {
    if (query.repo) {
      const url = `${this.namespace}/repos/${query.repo}/branches`;
      delete query.repo;
      return url;
    }

    return super.urlForQuery(...arguments);
  }
}
