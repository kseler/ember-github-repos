import { module, test } from 'qunit';
import { click, fillIn, findAll, select, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-github-repos/tests/helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | application', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  const repos = [
    {
      id: 1,
      type: 'repository',
      name: 'app',
      private: true,
      language: 'JavaScript',
      fullName: 'org/app',
      htmlUrl: 'url',
    },
    {
      id: 2,
      type: 'repository',
      name: 'api',
      private: false,
      language: 'Ruby',
      fullName: 'org/api',
      htmlUrl: 'url',
    },
  ];

  function findAllAccordions() {
    return findAll('[data-test-accordion]');
  }

  test('it fetches repos', async function (assert) {
    this.server.get('orgs/rails/repos', () => {
      return repos;
    });

    await visit('/');

    await fillIn('[data-test-organization-name]', 'rails');
    await click('[data-test-load-repos]');

    assert.dom('[data-test-repository-list]').exists();

    const accordions = findAllAccordions();
    assert.equal(accordions.length, 2);
  });

  test('it filters fetched repos', async function (assert) {
    this.server.get('orgs/rails/repos', () => {
      return repos;
    });

    await visit('/');

    assert.dom('[data-app-message]').hasText('Repositories will appear here');

    await fillIn('[data-test-organization-name]', 'rails');
    await click('[data-test-load-repos]');

    const accs1 = findAllAccordions();
    assert.equal(accs1.length, 2);

    await select('[data-test-visibility-select]', 'public');
    const accs2 = findAllAccordions();
    assert.equal(accs2.length, 1);

    await select('[data-test-visibility-select]', 'all');
    await fillIn('[data-test-language]', 'ruby');
    const accs3 = findAllAccordions();
    assert.equal(accs3.length, 1);

    await fillIn('[data-test-language]', 'aaaa');
    const accs4 = findAllAccordions();
    assert.equal(accs4.length, 0);
    assert.dom('[data-repos-message]').hasText('No repositories to show');
  });
});
