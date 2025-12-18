import { navigate } from "../router.js";
import { cartConstructor } from "../constructors/Cart.js";
import { customerConstructor } from "../constructors/Customer.js";

export const displayAllProductsView = (products) => {
    const container = document.getElementById("main-container");
    container.innerHTML = "<h2>Tooted</h2>";

    const productsContainer = document.createElement("div");
    productsContainer.classList.add("products-container");

    products.forEach((product => {
        const card = document.createElement("div");
        card.className = "product";
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.category}</p>
            <p>$${product.price.toFixed(2)}</p>
            <button id="favourites${product.id}" class="favourites-btn">${customerConstructor.isFavorite(product) ? 'Eemalda lemmikutest' : 'Lisa lemmikutesse'}
            </button>`;
        const cartBtn = document.createElement("button");
        cartBtn.textContent = "Lisa ostukorvi";
        cartBtn.onclick = (e) => { 
            e.stopPropagation();
            cartConstructor.addProduct(product);
        };
        card.appendChild(cartBtn);

        card.addEventListener("click", (event) => {
            if (event.target.id == 'favourites' + product.id) {
                const favoritesButton = event.target;
                favoritesButton.classList.toggle('added-to-favorites');
                favoritesButton.textContent = favoritesButton.classList.contains('added-to-favorites') ? 'Eemalda lemmikutest' : 'Lisa lemmikutesse';
                customerConstructor.toggleFavorite(product);
            } else {
                navigate("product-detail", product);
            }
        });

        productsContainer.appendChild(card);
    }));

    container.appendChild(productsContainer);
}
