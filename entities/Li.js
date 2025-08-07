import { Component } from './Component.js';

const productList = document.getElementById("productList")
class li extends Component {
  constructor(options) {
    super('li', null, options = {className: "product-item"});
  }
}
class Span extends Component {
  constructor(parent, options) {
    super("span", parent, options = { className: "product-item-details" });
  }
}
class p extends Component {
  constructor(parent, options) {
    super("p", parent, options);
  }
}
class Button extends Component {
  constructor(parent, options) {
    super("button", parent, options = { className: "remove-btn", textContent: "X" });
  }
}

export function createProductItem(product) {
    const newProductItem = new li();    
    const newProductDetails = new Span(newProductItem);
    const newProductDetailsText = new p(newProductDetails, {className: "product-name", textContent: product.name});    
    const removeButton = new Button(newProductItem);
    
    newProductDetailsText.render();
    newProductDetails.render();
    removeButton.render();

    return newProductItem.getElement();
}