import { customerConstructor } from "../constructors/Customer.js";
import { cartConstructor } from "../constructors/Cart.js";

const updateCartCount = () => {
    document.getElementById("cart-count").textContent =
        cartConstructor.totalItems;
};

export const displayFavoritesView = () => {
    const container = document.getElementById("main-container");
    container.innerHTML = "<h2>Lemmikud</h2>";

    customerConstructor.getAllFavorites().forEach(product => {
        const div = document.createElement("div");
        div.className = "product";

        div.innerHTML = `
            <h3>${product.title}</h3>
            <img src="${product.imageUrl}" alt="${product.title}" width="150">
            <p>$${product.price.toFixed(2)}</p>
            <button>Lisa ostukorvi</button>
        `;

        div.querySelector("button").onclick = () => {
            cartConstructor.addProduct(product);
            updateCartCount();
        };

        container.appendChild(div);
    });
};
