import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AccordionComponent extends Component {
  @tracked isExpanded = false;

  @action
  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
  }

  @action
  handleLinkClick(event) {
    event.stopPropagation();
  }
}
