import { createProductItem } from "./Li.js";

const products = [];

export function SaveNF(){
  const saveNFBtn = document.getElementById("saveNF");

  saveNFBtn.addEventListener("click", () =>{
    const newNF = {
      totalNF: document.getElementById("totalNF").value,
      prodTotalPrice: document.getElementById("productsTotalPrice").value,
      packQuantity: document.getElementById("totalPackQuantity").value,
      percentual: document.getElementById("percentual").value,
    };

    function verificarInputs(newNF) {
    // The 'Object.values(newNF)' retorn an array with all objects values.
    // The '.every(value => value.trim() !== '')' checks if each array value isn't empty after remove blankspaces with 'Trim()'
    return Object.values(newNF).every(value => value.trim() !== '');
    };

    if (verificarInputs(newNF)) {
      console.log(newNF);
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
