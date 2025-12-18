class Product {
    constructor(id, title, price, category) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.category = category;
        this.imageUrl = imageUrl;
    }

    describe() {
        return `${this.title} (${this.category}): $${this.price}`;
    }

    static discountedPrice(price, discount) {
        return price - (price * discount / 100);
    }
}

export default Product;
