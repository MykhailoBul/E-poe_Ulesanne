import Product from './constructors/Product.js';
import { displayAllProductsView } from "./views/allProductsView.js"; 
import { displayProductDetailView } from './views/productDetailView.js';
import { displayCartView } from './views/cartView.js';
import { cartConstructor } from './constructors/Cart.js';
import { displayFavoritesView } from './views/favoritesView.js';

const products = [
    new Product(1, 'Laptop', 999.99, 'Tech', 'images/laptop.avif'),
    new Product(2, 'Smartphone', 699.99, 'Tech', 'images/smartphone.avif'),
    new Product(3, 'Headphones', 199.99, 'Audio', 'images/headphones.webp'),
    new Product(4, 'Smartwatch', 299.99, 'Wearables', 'images/smartwatch.avif'),
];

// cartConstructor.addProduct(products[0], 2);
// cartConstructor.addProduct(products[2], 1);

const initApp = async () => { 
    displayAllProductsView(products);
    // displayProductDetailView(products[0]);  
    // displayCartView(cartConstructor);
    // displayFavoritesView();
}; 

document.addEventListener('DOMContentLoaded', initApp);
