import { shopItemsData } from "./Data";
import { openModal } from "./modal";

export function renderProductList() {
    const productList = document.getElementById('shop');
    productList.innerHTML = '';
  
    shopItemsData.forEach(product => {
      const productCard = createProductCard(product);
      productList.appendChild(productCard);
    });
  }

  const createProductCard = (product) => {
    const productCard = document.createElement('div');
    productCard.className = 'col card-container';
    productCard.innerHTML = `
      <div class="card">
        <img src=${product.img} class="img-fluid" width="300px">
        <div class="card-body">
          <h5 class="card-title mb-0">${product.name}</h5>
          <p class="card-text">&#8369;<span>${product.price}</span></p>
          <button data-product-index=${shopItemsData.indexOf(product)} class="btn btn-success fs-6 addToCart" data-bs-toggle="modal" data-bs-target="#exampleModal">Add to cart</button>
        </div>
      </div>
    `;
  
    productCard.querySelector('.addToCart').addEventListener('click', (event) => {
      openModal(event.target.dataset.productIndex);
    });
  
    return productCard;
  };