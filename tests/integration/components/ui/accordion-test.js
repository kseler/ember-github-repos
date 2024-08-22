import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-github-repos/tests/helpers';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | accordion', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <Ui::Accordion
        @name="rails"
        @language="Ruby"
        @visibility="public"
      >
        Ruby is awesome
      </Ui::Accordion>
    `);

    assert.dom('[data-test-accordion-name]').hasText('rails');
    assert.dom('[data-test-accordion-lang]').hasText('Ruby');
    assert.dom('[data-visibility="public"]').hasText('public');

    await click('[data-test-accordion-button]');
    assert.dom('[data-test-accordion-body]').hasText('Ruby is awesome');
  });
});
