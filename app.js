import { Component } from "./entities/Component.js";
import { li } from "./entities/Li.js";
import { Span } from "./entities/Span.js";


const productList = document.getElementById("productList");


let newProduct = new li(productList);
newProduct.build().render();
let newSpan = new Span(newProduct, { className: "product", innerHTML:  "Coca-cola mini lata <br> 1 fardos" });
newSpan.build().render();
newSpan = new Span(newProduct, { className: "exclude", textContent: "X" });
newSpan.build().render();

newProduct = new li(productList);
newProduct.build().render();
newSpan = new Span(newProduct, { className: "product", innerHTML:  "Fanta 2L <br> 2 fardos" });
newSpan.build().render();
newSpan = new Span(newProduct, { className: "exclude", textContent: "X" });
newSpan.build().render();