import { cart } from "./cart";
import { calculateCartTotal, cleanOutput, increaseCartItemQuantity, decreaseCartItemQuantity, removeCartItem } from "./utils";


export function renderCart() {
    const cartItems = document.getElementById('table-body');
    const cartTotalElement = document.getElementById('cart-total');
  
    // Clear the cart
    cartItems.innerHTML = '';
  
    cart.forEach(item => {
      const cartItem = createCartItemElement(item);
      cartItems.appendChild(cartItem);
    });
  
    const cartTotal = calculateCartTotal(cart);
    cartTotalElement.textContent = cleanOutput(cartTotal.toFixed(2));
  };
  
  const createCartItemElement = (item) => {
    const cartItem = document.createElement('tr');
    cartItem.innerHTML = `
      <th scope="row">
        <img class="rounded" src=${item.img} alt="" width="60px">
        <p>${item.name}</p>
      </th>
      <td>${item.price}</td>
      <td>
        <i class="bi bi-dash-circle-fill decreaseCartItem" style="font-size: 1rem; color: red;"></i>
        <span>${item.quantity}</span>
        <i class="bi bi-plus-circle-fill increaseCartItem" style="font-size: 1rem; color: green;"></i>
      </td>
      <td id="amount">${cleanOutput(item.amount.toFixed(2))}</td>
      <td class="p-0">
        <i class="bi bi-trash-fill removeCartItem" style="color: red;"></i>
      </td>
    `;
  
    cartItem.querySelector('.decreaseCartItem').addEventListener('click', () => {
      decreaseCartItemQuantity(item.id);
    });
    cartItem.querySelector('.increaseCartItem').addEventListener('click', () => {
      increaseCartItemQuantity(item.id);
    });
    cartItem.querySelector('.removeCartItem').addEventListener('click', () => {
      removeCartItem(item.id);
    });
  
    return cartItem;
  };