import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-github-repos/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | repository-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.repositories = [];

    await render(hbs`
      <RepositoryList @repositories={{this.repositories}} />
    `);

    assert.dom('[data-test-repository-wrapper]').exists();
    assert.dom('[data-test-visibility-select]').exists();
    assert.dom('[data-test-language]').exists();
  });
});
