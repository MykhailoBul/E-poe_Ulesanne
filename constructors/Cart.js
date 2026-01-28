class Cart {
    constructor() {
        this.items = JSON.parse(
            localStorage.getItem("cart")
        ) || [];
    }

    save() {
        localStorage.setItem(
            "cart",
            JSON.stringify(this.items)
        );
    }

    getAllProducts() {
        return this.items;
    }

    addProduct(product, quantity = 1) {
        const item = this.items.find(i => i.product.id === product.id);
        if (item) {
            item.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }
        this.save();
    }

    updateProductQuantity(productId, delta) {
        const item = this.items.find(i => i.product.id === productId);
        if (!item) return;

        item.quantity += delta;

        if (item.quantity <= 0) {
            this.removeProduct(productId);
        }
        this.save();
    }

    removeProduct(productId) {
        this.items = this.items.filter(i => i.product.id !== productId);
        this.save();
    }

    clear() {
        this.items = [];
        this.save();
    }

    calculateTotal() {
        return this.items.reduce(
            (sum, i) => sum + i.product.price * i.quantity,
            0
        );
    }

    get totalItems() {
        return this.items.reduce((sum, i) => sum + i.quantity, 0);
    }
}

export default Cart;
export const cartConstructor = new Cart();
