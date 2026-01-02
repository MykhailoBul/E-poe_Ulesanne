import { cartConstructor } from "../constructors/Cart.js";

const VAT = 0.22;

const updateCartCount = () => {
    document.getElementById("cart-count").textContent =
        cartConstructor.totalItems;
};

export const displayCartView = () => {
    const container = document.getElementById("main-container");
    container.innerHTML = "<h2>Ostukorv</h2>";

    cartConstructor.getAllProducts().forEach(item => {
        const div = document.createElement("div");

        div.innerHTML = `
            <p>${item.product.title}</p>
            <button>-</button>
            <span>${item.quantity}</span>
            <button>+</button>
            <button>Eemalda ostukorvist</button>
        `;

        div.children[1].onclick = () => {
            cartConstructor.updateProductQuantity(item.product.id, -1);
            updateCartCount();
            displayCartView();
        };

        div.children[3].onclick = () => {
            cartConstructor.updateProductQuantity(item.product.id, 1);
            updateCartCount();
            displayCartView();
        };

        div.children[4].onclick = () => {
            cartConstructor.removeProduct(item.product.id);
            updateCartCount();
            displayCartView();
        };

        container.appendChild(div);
    });

    const net = cartConstructor.calculateTotal();
    const vat = net * VAT;
    const gross = net + vat;

    container.innerHTML += `
        <p>Netto: $${net.toFixed(2)}</p>
        <p>Käibemaks: $${vat.toFixed(2)}</p>
        <p>Kokku: $${gross.toFixed(2)}</p>

        <button id="buy-btn">Osta</button>
        <button id="clear-cart">Tühjenda</button>
    `;

    document.getElementById("buy-btn").onclick = () => {
        alert("Tellimus on esitatud!");
        cartConstructor.clear();
        updateCartCount();
        displayCartView();
    };

    document.getElementById("clear-cart").onclick = () => {
        cartConstructor.clear();
        updateCartCount();
        displayCartView();
    };
};
