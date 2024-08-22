import { module, test } from 'qunit';
import { setupTest } from 'ember-github-repos/tests/helpers';

module('Unit | Controller | application', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:application');
    assert.ok(controller);
  });
});
