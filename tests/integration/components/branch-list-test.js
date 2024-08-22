import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-github-repos/tests/helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | branch-list', function (hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test('it renders branch lists', async function (assert) {
    this.server.get('/repos/rails/rails/branches', () => {
      return [
        { id: 1, type: 'branch', name: 'master' },
        { id: 2, type: 'branch', name: 'develop' },
      ];
    });

    await render(hbs`<BranchList @repo="rails/rails" />`);

    assert.dom('[data-test-branch-name="master"]').exists();
    assert.dom('[data-test-branch-name="develop"]').exists();
  });

  test('it renders message node', async function (assert) {
    this.server.get('/repos/rails/rails/branches', () => {
      return [];
    });

    await render(hbs`<BranchList @repo="rails/rails" />`);

    assert.dom('[data-test-message]').exists();
  });
});
