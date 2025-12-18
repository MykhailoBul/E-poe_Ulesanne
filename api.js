import { Product} from './constructors/Product.js';

export const fetchProducts = async () => {
    try{
        const data = await fetch('/data.json');
        const jsonData = await data.json();
        const constructedData = jsonData.map(product => new Product(
            product.id,
            product.name,
            product.price,
            product.category,
            product.image
        ));
        return constructedData;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
};