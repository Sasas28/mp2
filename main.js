import { renderProductList } from "./src/shop";
import { checkCartEmpty } from "./src/utils";
import { handleSearchInput } from "./src/liveSearch";

const cartIcon = document.getElementById('cart-icon');
const searchInput = document.getElementById('product-search');

renderProductList();
cartIcon.addEventListener('click', checkCartEmpty)
searchInput.addEventListener('input', handleSearchInput);