import Order from './Order.js';

class Customer {
    constructor(name) {
        this.name = name;
        this.orderHistory = [];
        this.favorites = [];
    }

    placeOrder(cart) {
        const order = new Order(cart);
        this.orderHistory.push(order);
        return order;
    }

    toggleFavorites(product) {
        const index = this.favorites.findIndex(p => p.id === product.id);
        if (index !== -1) {
            this.favorites.splice(index, 1);
        } else {
            this.favorites.push(product);
        }
    }

    isFavorite(product) {
        return this.favorites.some(p => p.id === product.id);
    }

    getAllFavorites() {
        return this.favorites;
    }
}

export default Customer;
export const customerConstructor = new Customer("Mike");
