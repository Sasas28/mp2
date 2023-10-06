import { shopItemsData } from "./Data";
import { updateCart } from "./cart";

const data = shopItemsData;

export function openModal(productIndex) {
    const product = data[productIndex];
    const modalContainer = document.getElementById('modal-content');
    modalContainer.innerHTML = `
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${product.name}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="modal-img-container mb-1">
          <img id="modal-img" class="img-fluid" src=${product.img} alt="">
        </div>
        <div class="modal-qty-container">
          <i class="bi bi-dash-circle-fill decreaseQuantity" style="font-size: 1rem; color: red;"></i>
          <span id="quantity" class="quantity">1</span>
          <i class="bi bi-plus-circle-fill increaseQuantity" style="font-size: 1rem; color: green;"></i>
        </div>
        <p id="modal-price" class="modal-price mb-0">&#8369;${product.price}</p>
      </div>
      <div class="modal-footer">
        <button id="update-cart" class="btn btn-primary" data-bs-dismiss="modal">Proceed</button>
      </div>
    `;
  
    const quantityElement = modalContainer.querySelector('#quantity');
    modalContainer.querySelector('.decreaseQuantity').addEventListener('click', () => {
      decreaseQuantity(quantityElement);
    });
    modalContainer.querySelector('.increaseQuantity').addEventListener('click', () => {
      increaseQuantity(quantityElement);
    });

    modalContainer.querySelector('#update-cart').addEventListener('click', updateCart)

  };
  
  const increaseQuantity = (quantityElement) => {
    let quantity = parseInt(quantityElement.textContent);
    quantity = isNaN(quantity) ? 1 : quantity + 1;
    quantityElement.textContent = quantity;
  };
  
  const decreaseQuantity = (quantityElement) => {
    let quantity = parseInt(quantityElement.textContent);
    quantity = isNaN(quantity) ? 1 : Math.max(1, quantity - 1);
    quantityElement.textContent = quantity;
  };