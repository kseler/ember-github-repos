import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-github-repos/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui/accordion', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Ui::Accordion />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Ui::Accordion>
        template block text
      </Ui::Accordion>
    `);

    assert.dom().hasText('template block text');
  });
});
