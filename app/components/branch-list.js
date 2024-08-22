import Component from '@glimmer/component';
import { task } from 'ember-concurrency';
import { tracked } from '@glimmer/tracking';
import { inject } from '@ember/service';
import { action } from '@ember/object';

export default class BranchListComponent extends Component {
  @inject('store') store;

  @tracked branches = [];

  loadBranchesTask = task(async () => {
    try {
      const branches = await this.store.query('branch', {
        repo: this.args.repo,
      });

      branches.forEach((branch) => {
        branch.repo = this.args.repo;
      });

      this.branches = branches;
    } catch (error) {
      this.notify?.error('Cannot load branches');
      console.log(error);
    }
  });

  @action
  loadBranches() {
    const cachedBranches = this.store
      .peekAll('branch')
      .filter((branch) => branch.repo === this.args.repo);

    if (cachedBranches.length) {
      this.branches = cachedBranches;
      return;
    }

    this.loadBranchesTask.perform();
  }
}
