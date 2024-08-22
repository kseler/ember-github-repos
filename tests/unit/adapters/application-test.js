import { setupTest } from 'ember-github-repos/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Adapter | application', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const adapter = this.owner.lookup('adapter:application');
    assert.ok(adapter, 'adapter exists');
  });
});
