import Product from './constructors/Product.js';

export const fetchProducts = async () => {
    try {
        const response = await fetch('./data.json');
        const data = await response.json();

        return data.map(p =>
            new Product(p.id, p.title, p.price, p.category, p.image)
        );
    } catch (error) {
        console.error("Fetch error:", error);
        return [];
    }
};
