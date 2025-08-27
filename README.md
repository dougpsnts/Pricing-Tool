<div align="center">

# Pricing Tool
A simple tool that helps defining products prices for a small bakery.

![last-commit](https://img.shields.io/github/last-commit/dougpsnts/Pricing-Tool?style=flat&logo=git&logoColor=white&color=0080ff) ![repo-top-language](https://img.shields.io/github/languages/top/dougpsnts/Pricing-Tool?style=flat&color=0080ff) ![repo-language-count](https://img.shields.io/github/languages/count/dougpsnts/Pricing-Tool?style=flat&color=0080ff)

<p><em>Built with the tools and technologies:</em></p>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black) ![Css](https://img.shields.io/badge/CSS-0A16A9.svg?style=flat&logo=Css&logoColor=white)

# Live Preview

[Pricing-Tool-App](https://pricing-tool-xi.vercel.app/)

</div>

## Features

- Can add or remove as many products as you want;
- Can exclude products fron the list and recalc the new price;
- Shows the tax included on the NF then distributes to every unit of product added;
- Shows the price already add on the list, so you can see if checks with the NF;
- Calcs the new price based on the chosen profit percentage;
- Fully responsive!

## How does it work?

1. Stores a NF information and takes the tax to distribute and also saves the profit percentage:

   - Type on the first input total price paied on the NF;
   - Type on the second input the products total price on the NF(it's, generally, different as it does not include tax);
   - Type on the third input the quantity of packs;
   - Type on the fourth input the percetage you want of profit;
   - Than click on `Salvar NF` so will show the tax difference;

2. Add products in a array of products then shows on the third column:

    - Once you have an NF, type on first input the name of the product;
    - Type on the second input the total units of this product;
    - Type on the third input the value of the packs(if there's more than one pack, type the total price pack);
    - Than click on `Adicionar à lista` so will show the sum added and display the prodct on the third column;

3. Calcs and shows a new price for each product added, dividing the value of the tax difference for each unit of product equally and then adding the reported profit percentage:
   
    - Click on `Calcular preço` for the final price;
    - It will display the grand total(sum of the products with the new price);
    - Once you excludes a product from the list, a new calc is required 
