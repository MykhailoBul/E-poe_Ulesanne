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
}

export default Customer;