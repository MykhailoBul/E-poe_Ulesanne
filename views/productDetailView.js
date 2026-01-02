import { cartConstructor } from "../constructors/Cart.js";

const updateCartCount = () => {
    document.getElementById("cart-count").textContent =
        cartConstructor.totalItems;
};

export const displayProductDetailView = (product) => {
    const container = document.getElementById("main-container");
    container.innerHTML = "";

    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
        <h3>${product.title}</h3>
        <img src="${product.imageUrl}" alt="${product.title}" width="250">
        <p>${product.category}</p>
        <p>$${product.price.toFixed(2)}</p>
        <button>Lisa ostukorvi</button>
    `;

    div.querySelector("button").onclick = () => {
        cartConstructor.addProduct(product);
        updateCartCount();
    };

    container.appendChild(div);
};
