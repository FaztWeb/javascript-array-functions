export const cardsProducts = (products) => {
  return products.map((product) => {
    const div = document.createElement("div");
    div.classList = "col-md-4 p-2";
    div.innerHTML = `
    <div class="card card-body h-100">
    <h5>${product.name} <span class="badge">${product.category}</span></h5>
    <h2>${product.price} $</h2>
    <h6>Creation Date ${product.creationDate}</h6>
    </div>
  `;
    return div;
  });
};
