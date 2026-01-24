import { navigate } from "../router.js";
import { cartConstructor } from "../constructors/Cart.js";
import { customerConstructor } from "../constructors/Customer.js";

const updateCartCount = () => {
    document.getElementById("cart-count").textContent =
        cartConstructor.totalItems;
};

export const displayAllProductsView = (products) => {
    const container = document.getElementById("main-container");
    container.innerHTML = "<h2>Tooted</h2>";

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product";

        card.innerHTML = `
            <h3>${product.title}</h3>
            <img src="${product.imageUrl}" alt="${product.title}" width="150">
            <p>${product.category}</p>
            <p>$${product.price.toFixed(2)}</p>

            <button class="fav-btn">
                ${customerConstructor.isFavorite(product)
                    ? "Eemalda lemmikutest"
                    : "Lisa lemmikutesse"}
            </button>
            <button class="cart-btn">Lisa ostukorvi</button>
        `;

        card.querySelector(".fav-btn").onclick = (e) => {
            e.stopPropagation();
            customerConstructor.toggleFavorites(product);
            displayAllProductsView(products);
        };

        card.querySelector(".cart-btn").onclick = (e) => {
            e.stopPropagation();
            cartConstructor.addProduct(product);
            updateCartCount();
        };

        card.onclick = () => navigate("productDetail", product);

        container.appendChild(card);
    });
};
