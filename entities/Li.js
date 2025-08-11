import { Component } from './Component.js';
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

export function CreateProductItem(product, count) {
    const newProductItem = new li();    
    const newProductDetails = new Span(newProductItem, { className: "productDetails"});
    const newProductDetailsText = new p(newProductDetails, {className: "product-name", textContent: product.name});    
    const removeButton = new Button(newProductItem);
    
    newProductDetailsText.render();
    newProductDetails.render();
    removeButton.render();
    newProductDetails.getElement().id = "product-item-details-" + count;

    return newProductItem.getElement();
}

export function CreateP(value, container) {
  if (container.querySelector('p.product-price') !== null) {
    container.querySelector('p.product-price').textContent = "R$" + value;
    // If the p element already exists, update its text content
    return container.querySelector('p.product-price');
  }
  const newP = new p('#' + container.id, { className: "product-price", textContent: "R$" + value });
  newP.render();
  return newP.getElement();
}