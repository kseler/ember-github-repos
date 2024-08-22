import { setupTest } from 'ember-github-repos/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Adapter | repository', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const adapter = this.owner.lookup('adapter:repository');
    assert.ok(adapter, 'adapter exists');
  });
});
