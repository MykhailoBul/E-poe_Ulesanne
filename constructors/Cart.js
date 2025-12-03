class Cart {
    constructor() {
        this.items = [];
    }

    addProduct(product, quantity) {
        this.items.push({ product, quantity });
    }

    removeProduct(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    calculateTotal() {
        return this.items.reduce(
            (total, item) => total + item.product.price * item.quantity,
            0
        );
    }

    get totalItems() {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
    }
}

export default Cart;