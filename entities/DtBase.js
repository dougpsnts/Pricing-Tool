import { createProductItem } from "./Li.js";

const products = [];
let difTax = document.getElementById("taxDifference");
let quantPac = 0;
let totalPriceAdd = 0;

export function SaveNF(){
  const saveNFBtn = document.getElementById("saveNF");

  saveNFBtn.addEventListener("click", () =>{
    const newNF = {
      totalNF: parseFloat(document.getElementById("totalNF").value),
      prodTotalPrice: parseFloat(document.getElementById("productsTotalPrice").value),
      packQuantity: parseFloat(document.getElementById("totalPackQuantity").value),
      percentual: parseFloat(document.getElementById("percentual").value),
    };

    function verificarInputs(newNF) {
    // The 'Object.values(newNF)' retorn an array with all objects values.
    // The '.every(value => value.trim() !== '')' checks if each array value isn't empty. 
    return Object.values(newNF).every(value => value !== '');
    };

    if (verificarInputs(newNF)) {
      console.log(newNF);
      difTax.textContent = `R$ ${(newNF.totalNF - newNF.prodTotalPrice).toFixed(2)}`;
    } else {
      alert('Por favor, preencha todos os campos da NF.');
    }
     return newNF;
  });
}

export function AddToList(){
  const addProductButton = document.getElementById("addToListBtn");
  const productList = document.getElementById("productList");

  addProductButton.addEventListener("click", () => {
    const newProduct = {
      name: document.getElementById("productName").value,
      packPrice: document.getElementById("packPrice").value,
      unitQuantity: document.getElementById("productUnitQuantity").value
    };

    if(newProduct.name.trim() === ''){
        alert("O nome do produto não pode estar vazio.");
        return;
    }

    const newProductLi = createProductItem(newProduct);

    productList.appendChild(newProductLi);

    

    products.push(newProduct);

    console.log(products);
  });
}

export function CalcNewPrice(){

}
