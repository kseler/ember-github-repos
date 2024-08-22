import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { task } from 'ember-concurrency';

export default class ApplicationController extends Controller {
  @inject('store') store;
  @inject('notify') notify;
  @inject('access-token') accessToken;

  @tracked organization = '';
  @tracked repositories = [];

  get token() {
    return this.accessToken.token;
  }

  loadRepositoriesTask = task(async () => {
    try {
      const repositories = await this.store.query('repository', {
        org: this.organization,
      });

      this.repositories = repositories;
    } catch (error) {
      this.notify?.error('Cannot load repositories');
      console.log(error);
    }
  });

  @action
  async loadRepositories() {
    this.repositories = [];
    this.loadRepositoriesTask.perform();
  }

  @action
  updateOrganization(event) {
    this.organization = event.target.value.toLowerCase().trim();
  }

  @action
  updateAccessToken(event) {
    this.accessToken.updateToken(event.target.value).trim();
  }
}
