class Order {
    constructor(cart) {
        this.orderDate = new Date();
        this.cart = cart;
    }

    printOrder() {
        console.log(`Order Date: ${this.orderDate}`);
        console.log(`Total Items: ${this.cart.totalItems}`);
        console.log(`Total Price: $${this.cart.calculateTotal().toFixed(2)}`);
    }
}
export default Order;