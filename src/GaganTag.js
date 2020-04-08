import { html, css, LitElement } from 'lit-element';

export class GaganTag extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--gagan-tag-text-color, white);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 0;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title}!</h2>
      <h1>${this.counter}</h1>
      <button @click=${this.__increment}>Press me to Increment Counter</button>
    `;
  }
}
