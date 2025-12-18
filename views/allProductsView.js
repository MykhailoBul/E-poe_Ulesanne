import { navigate } from "../router.js";
import { cartConstructor } from "../constructors/Cart.js";
import { customerConstructor } from "../constructors/Customer.js";

export const displayAllProductsView = (products) => {
    const container = document.getElementById("main-container");
    container.innerHTML = "<h2>Tooted</h2>";

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product";

        const favBtn = document.createElement("button");
        favBtn.textContent = customerConstructor
            .getAllFavorites()
            .some(p => p.id === product.id)
            ? "Eemalda lemmikutest"
            : "Lisa lemmikutesse";

        favBtn.onclick = () => {
            customerConstructor.toggleFavorites(product);
            displayAllProductsView(products);
        };

        const cartBtn = document.createElement("button");
        cartBtn.textContent = "Lisa ostukorvi";
        cartBtn.onclick = () => cartConstructor.addProduct(product);

        card.onclick = () => navigate("productDetail", product);

        card.innerHTML = `
            <h3>${product.title}</h3>
            <p>${product.category}</p>
            <p>$${product.price.toFixed(2)}</p>
        `;

        card.append(cartBtn, favBtn);
        container.appendChild(card);
    });
};

