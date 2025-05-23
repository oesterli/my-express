import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import './ClickButton'; // Wichtig!

@customElement('app-root')
export class AppRoot extends LitElement {
  private handleCustomClick(e: CustomEvent) {
    console.log('Klick erkannt:', e.detail.time);
  }

  render() {
    return html`
      <h2>Demo mit Events</h2>
      <click-button @my-click=${this.handleCustomClick}></click-button>
    `;
  }
}
