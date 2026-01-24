class Product {
    constructor(id, title, price, category, imageUrl = "") {
        this.id = id;
        this.title = title;
        this.price = price;
        this.category = category;
        this.imageUrl = imageUrl;
    }
}

export default Product;
