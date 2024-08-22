import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject } from '@ember/service';

export default class RepositoryListComponent extends Component {
  @inject('store') store;

  @tracked visibilityOption = 'all';
  @tracked filterLanguage = '';

  @action
  updateVisibilityOption(event) {
    this.visibilityOption = event.target.value;
  }

  @action
  updateFilterLanguage(event) {
    this.filterLanguage = event.target.value;
  }

  get filteredRepositories() {
    return this.args.repositories
      .filter((repo) => {
        if (
          this.visibilityOption === 'all' ||
          (this.visibilityOption === 'public' && !repo.private) ||
          (this.visibilityOption === 'private' && repo.private)
        ) {
          return true;
        }

        return false;
      })
      .filter((repo) => {
        if (repo.language && this.filterLanguage) {
          return repo.language
            .toLowerCase()
            .includes(this.filterLanguage.toLowerCase());
        }

        if (!this.filterLanguage) {
          return true;
        }

        return false;
      });
  }
}
