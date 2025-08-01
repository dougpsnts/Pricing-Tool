import { Component } from "./Component.js";

export class Span extends Component {
  constructor(parent, options) {
    super("span", parent, options);
  }

  setText(text) {
    this.getElement().textContent = text;
    return this;
  }
}