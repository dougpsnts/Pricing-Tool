import { CreateProductItem, CreateP } from "./Li.js";

let products = [];
let newNF = {}
let taxDif = 'R$ 0.00';
const grandTotal = document.getElementById("grandTotal");
const calcBtn = document.getElementById("calcBtn")
const taxDifference = document.getElementById("taxDifference");
const totalPriceAdded = document.getElementById("totalPriceAdded");


export function SaveNF(){
  const saveNFBtn = document.getElementById("saveNF");

  saveNFBtn.addEventListener("click", () =>{
    newNF = {
      totalNF: parseFloat(document.getElementById("totalNF").value),
      prodTotalPrice: parseFloat(document.getElementById("productsTotalPrice").value),
      packQuantity: parseFloat(document.getElementById("totalPackQuantity").value),
      percentual: (parseFloat(document.getElementById("percentual").value) / 100) + 1,
    };

    function VerificarInputs(newNF) {
    // The 'Object.values(newNF)' retorn an array with all objects values.
    // The '.every(value => value.trim() !== '')' checks if each array value isn't empty. 
    return Object.values(newNF).every(value => value !== '');
    };

    if (VerificarInputs(newNF)) {
      console.log(newNF);
      taxDif = (newNF.totalNF - newNF.prodTotalPrice).toFixed(2)
      taxDifference.textContent = `R$ ${taxDif}`;
    } else {
      alert('Por favor, preencha todos os campos da NF.');
    }
    return newNF;
  });
}

export function AddToList(){
  let count = 0;
  const addProductButton = document.getElementById("addToListBtn");
  const productList = document.getElementById("productList");
  const nameInput = document.getElementById("productName");
  const unitQuantityInput = document.getElementById("productUnitQuantity");
  const packPriceInput = document.getElementById("packPrice");
  let accPackPrice = 0;

  addProductButton.addEventListener("click", () => {
    const newProduct = {
      name: nameInput.value,
      unitQuantity: parseFloat(unitQuantityInput.value),
      packPrice: parseFloat(packPriceInput.value)
    };

    if(newProduct.name.trim() === ''){
        alert("O nome do produto não pode estar vazio.");
        return;
    }

    const newProductLi = CreateProductItem(newProduct, count);

    productList.appendChild(newProductLi);

    products.push(newProduct);
    ExcludeItem();
    count++;

    //clear input fields
    nameInput.value = ''
    unitQuantityInput.value = ''
    packPriceInput.value = ''

    accPackPrice = accPackPrice + newProduct.packPrice;
    console.log(accPackPrice);

    totalPriceAdded.textContent = "R$" + accPackPrice.toFixed(2);

    console.log(products);
  });
}

export function CalcNewPrice(){
  calcBtn.addEventListener("click", () => {
  const totalUnits = products.reduce((acc, product) => {
  return acc + parseFloat(product.unitQuantity);
}, 0 );
  const productsWithNewPrice = products.map(product => {
    const unitPrice = product.packPrice / product.unitQuantity;
    const taxPerUnit = taxDif / totalUnits;
    const newPrice = (unitPrice + taxPerUnit) * newNF.percentual;
    return { ...product, newPrice: newPrice};
  })
  productsWithNewPrice.forEach((product, index) => {
    const li = document.querySelectorAll(".product-item-details")[index];
    CreateP(product.newPrice.toFixed(2),li);
  });
  const newTotal = productsWithNewPrice.reduce((acc, product) => {
    return acc + parseFloat(product.newPrice);
  },0);  
  grandTotal.textContent = "R$" + (newTotal.toFixed(2));
  console.log(newTotal);
  console.log(totalUnits);
  console.log(productsWithNewPrice);
});
}

function ExcludeItem(){
  const ul = document.querySelector("ul"); 
  ul.addEventListener("click", (event) => { //using event delegation
    const btn = event.target.closest(".remove-btn");
    if (!btn) return;

    const li = btn.closest("li"); // Get the LI element that contains the clicked button
    const lis = Array.from(ul.children); // Convert NodeList to Array
    const index = lis.indexOf(li); // Find the index of the clicked LI

    if (index !== -1) {
      products = products.toSpliced(index, 1); // Remove the product from the array without mutating it giving a new array
      li.remove(); // Remove the LI from the DOM
      console.log(products);
    }
  });
}
