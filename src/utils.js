import { cart } from "./Data";
import { renderCart } from "./renderCart";

export function countItem() {
    const cartCounter = document.getElementById('cart-counter');
    let countItem = cart.reduce((total, item) => total + item.quantity, 0);
    cartCounter.textContent = countItem;
    localStorage.setItem("data", JSON.stringify(cart));
  }

export function calculateCartTotal(cart) {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

export function cleanOutput (output) {
	let output_string = output.toString();
	let decimal = output_string.split(".")[1];
	output_string = output_string.split(".")[0];
	let output_array = output_string.split("");
	
	if (output_array.length > 3) {
		for (let i = output_array.length - 3; i > 0; i -= 3) {
			output_array.splice(i, 0, ",");
		}
	}

	if (decimal) {
		output_array.push(".");
		output_array.push(decimal);
	}

	return output_array.join("");
}
  
export function increaseCartItemQuantity(itemId) {
    const item = cart.find(product => product.id === itemId);
    if (item) {
        item.quantity++;
        item.amount += parseInt(item.price);
        localStorage.setItem("data", JSON.stringify(cart));
        countItem()
        renderCart(); // Update the cart display
    }
  }
  
export function decreaseCartItemQuantity(itemId) {
    const item = cart.find(product => product.id === itemId);
    if (item && item.quantity > 1) {
        item.quantity--;
        item.amount -= parseInt(item.price);
        localStorage.setItem("data", JSON.stringify(cart));
        countItem()
        renderCart(); // Update the cart display
    }
  }
  
export function removeCartItem(itemId) {
    const itemIndex = cart.findIndex(product => product.id === itemId);
    if (itemIndex !== -1) {
        cart.splice(itemIndex, 1);
        localStorage.setItem("data", JSON.stringify(cart));
        countItem();
        renderCart(); 
        checkCartEmpty();
    }
  }

export function checkCartEmpty() {
    if (cart.length === 0) {
      document.getElementById('message').classList.remove('d-none')
      document.getElementById('table').style.display = "none";
    } else {
      document.getElementById('message').classList.add('d-none')
      document.getElementById('table').style.display = "block";
    } 
  }