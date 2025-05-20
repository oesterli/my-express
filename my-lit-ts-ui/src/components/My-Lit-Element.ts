import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-lit-element')
export class MyLitElement extends LitElement {
  static styles = css`
    p {
      color: teal;
      font-weight: bold;
    }
  `;

  @property({ type: String })
  name: string = 'Welt';

  render() {
    return html`<p>Hallo, ${this.name}!</p>`;
  }
}
