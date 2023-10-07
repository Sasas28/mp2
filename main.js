import { renderProductList } from "./src/shop";
import { checkCartEmpty, countItem } from "./src/utils";
import { handleSearchInput } from "./src/liveSearch";
import { renderCart } from "./src/renderCart";

const cartIcon = document.getElementById('cart-icon');
const searchInput = document.getElementById('product-search');

countItem();
renderProductList();
renderCart();
cartIcon.addEventListener('click', checkCartEmpty)
searchInput.addEventListener('input', handleSearchInput);