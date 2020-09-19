import { products as data } from "./products.js";
import { cardsProducts } from "./components/cardsProducts.js";

let products = data;

const renderProducts = (products) => {
  const productList = document.querySelector("#product-list");
  productList.innerHTML = "";

  const productsCards = cardsProducts(products);
  productList.append(...productsCards);
};

const searchProductForm = document.querySelector("#search-product-form");
searchProductForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = searchProductForm["search-name"].value;

  const filteredProducts = products.filter((product) =>
    product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
  renderProducts(filteredProducts);
});

window.addEventListener("DOMContentLoaded", () => {
  console.log("Window is ready!");
  renderProducts(products);
});
