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

    printOrderHistory() {
        console.log(`Order History for ${this.name}:`);

        if (this.orderHistory.length === 0) {
            console.log("Tellimusi ei ole.");
            return;
        }

        this.orderHistory.forEach((order, index) => {
            console.log(`Order ${index + 1}:`);
            order.printOrder();
        });
    }
        toggleFavorites(product) {
        const index = this.favorites.findIndex(p => p.id === product.id);
        if (index !== -1) {
            this.favorites.splice(index, 1);
        } else {
            this.favorites.push(product);
        }
    }

    getAllFavorites() {
        return this.favorites;
    }
}

export default Customer;
export const customerConstructor = new Customer("Mike");

