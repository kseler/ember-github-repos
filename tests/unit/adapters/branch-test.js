import { setupTest } from 'ember-github-repos/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Adapter | branch', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const adapter = this.owner.lookup('adapter:branch');
    assert.ok(adapter, 'adapter exists');
  });
});
