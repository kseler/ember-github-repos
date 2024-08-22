import { module, test } from 'qunit';
import { setupTest } from 'ember-github-repos/tests/helpers';

module('Unit | Service | access-token', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:access-token');
    assert.ok(service);
  });
});
