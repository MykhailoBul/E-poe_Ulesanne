import {Product} from './product.js';
import {displayAllProductsView} from './views/allProductsView.js';

const products = [
    new Product(1, 'Laptop', 999.99, 'Tech'),
    new Product(2, 'Smartphone', 699.99, 'Tech'),
    new Product(3, 'Headphones', 199.99, 'Audio'),
    new Product(4, 'Smartwatch', 299.99, 'Wearables')
];

const initApp = () => {
    displayAllProductsView(products);
};

document.addEventListener('DOMContentLoaded', initApp);