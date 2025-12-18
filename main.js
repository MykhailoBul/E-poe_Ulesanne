import { Product } from './constructors/Product.js';
import { displayAllProductsView } from "./views/allProductsView.js"; 
import { navigate } from './router.js';

const products = [
    new Product(1, 'Laptop', 999.99, 'Tech', 'images/laptop.avif'),
    new Product(2, 'Smartphone', 699.99, 'Tech', 'images/smartphone.avif'),
    new Product(3, 'Headphones', 199.99, 'Audio', 'images/headphones.webp'),
    new Product(4, 'Smartwatch', 299.99, 'Wearables', 'images/smartwatch.avif'),
];

const initApp = () => {
    const homeButton = document.getElementById('home-button');
    homeButton.style.cursor = 'pointer';
    homeButton.onclick = () => initApp();

    const favoritesButton = document.getElementById('favourites');
    favoritesButton.onclick = () => navigate('favorites');

    const cartButton = document.getElementById('cart-btn');
    cartButton.onclick = () => navigate('cart');

    displayAllProductsView(products);
};

document.addEventListener('DOMContentLoaded', initApp);