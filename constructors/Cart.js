class Cart {
    constructor() {
        this.items = [];
    }
    getAllProducts() {
        return this.items;
    }
    addProduct(product, quantity = 1) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }
        this.displayTotalItems();
    }
    updateProductQuantity(productId, quantity) {
        const item = this.items.find(item => item.product.id === productId);
        if (item) {
            item.quantity = quantity;
        }
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
export const cartConstructor = Cart;