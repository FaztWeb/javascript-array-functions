import { products } from "../products.js";

// Sort
// const sortedProductsByCreationDate = products.sort(function (p1, p2) {
//   if (p1.creationDate > p2.creationDate) {
//     return 1;
//   }
//   return -1;
// });
// console.log(sortedProductsByCreationDate);

// const sortedProductsByCreationDate = products.sort((a, b) =>
//   a.creationDate > b.creationDate ? 1 : -1
// );

// console.log(sortedProductsByCreationDate);

// Sort prices
// const sortedPrices = products.map(p => p.price).sort();

// const sortedPrices = products.map((p) => p.price).sort((a, b) => a - b);
// const sortedPrices = products.map((p) => p.price).sort((a, b) => b - 1);
// console.log(sortedPrices);
