import Order from './Order.js';

class Customer {
    constructor(name) {
        this.name = name;
        this.orderHistory = [];
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
        const existingItem = this.favorites.find(
            item => item.product.id === product.id
        );
        if (existingItem) {
            this.favorites = this.favorites.filter(
                item => item.product.id !== product.id
            );
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