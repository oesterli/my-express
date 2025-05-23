import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('click-button')
export class ClickButton extends LitElement {
  static styles = css`
    button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      cursor: pointer;
    }
  `;

  private handleClick() {
    this.dispatchEvent(new CustomEvent('my-click', { detail: { time: new Date() }, bubbles: true, composed: true }));
  }

  render() {
    return html`<button @click=${this.handleClick}>Klick mich!</button>`;
  }
}
