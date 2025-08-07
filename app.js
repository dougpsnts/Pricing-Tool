import { AddToList, SaveNF } from "./entities/DtBase.js";

//Certifies that the script will wait the HTML elements load first and than will call the functions
document.addEventListener('DOMContentLoaded', () => {
    AddToList();
    SaveNF();
});
