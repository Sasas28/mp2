import { shopItemsData, cart } from "./Data";
import { countItem } from "./utils";
import { renderCart } from "./renderCart";



export function updateCart() {
    const quantityInput = document.getElementById('quantity');
    const priceInput = document.getElementById('modal-price');

    const price = parseInt(priceInput.textContent.slice(1));
    const quantity = parseInt(quantityInput.textContent);
    const amount = price * quantity;
    const selectedProduct = shopItemsData.find(product => product.name === document.getElementById('exampleModalLabel').textContent);

    if (!isNaN(quantity) && quantity > 0) {
        const existingCartItemIndex = cart.findIndex(item => item.name === selectedProduct.name);

        if (existingCartItemIndex !== -1) {
            // If the product already exists in the cart, accumulate the quantity
            cart[existingCartItemIndex].quantity += quantity;
            cart[existingCartItemIndex].amount += amount;
        } else {
            selectedProduct.quantity = quantity; // Set quantity
            selectedProduct.amount = amount;
            cart.push(selectedProduct);
        }
    }
    
    localStorage.setItem("data", JSON.stringify(cart));
    countItem()
    renderCart()
}