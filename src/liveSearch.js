import { shopItemsData } from "./Data";
import { openModal } from "./modal";

const searchInput = document.getElementById('product-search');

export function handleSearchInput() {
    const searchQuery = searchInput.value;
    renderProductList(searchQuery);
  }
  

  function renderProductList(searchQuery = '') {
    const productList = document.getElementById('shop');
    productList.innerHTML = '';
  
    const filteredProducts = shopItemsData.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    filteredProducts.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'col card-container';
      productCard.innerHTML =  `
        <div class="card">
        <img src=${product.img} class="img-fluid" width="300px">
        <div class="card-body">
            <h5 class="card-title mb-0">${product.name}</h5>
            <p class="card-text">&#8369;<span>${product.price}</span></p>
            <button data-product-index=${shopItemsData.indexOf(product)} class="btn btn-success fs-6 addToCart" data-bs-toggle="modal" data-bs-target="#exampleModal">Add to cart</button>
        </div>
        </div>
      `;

        productCard.querySelector('.addToCart').addEventListener('click', (event) => { openModal(event.target.dataset.productIndex);});
        
      productList.appendChild(productCard);
    });
  }