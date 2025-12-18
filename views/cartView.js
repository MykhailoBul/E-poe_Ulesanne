import { cartConstructor } from "../constructors/Cart.js";

const VAT = 0.22;

export const displayCartView = () => {
    const container = document.getElementById("cart-view");
    container.innerHTML = "<h2>Ostukorv</h2>";

    cartConstructor.items.forEach(item => {
        const div = document.createElement("div");

        div.innerHTML = `
            <p>${item.product.title}</p>
            <button>-</button>
            ${item.quantity}
            <button>+</button>
            <button>❌</button>
        `;

        div.children[1].onclick = () =>
            cartConstructor.updateProductQuantity(item.product.id, -1);
        div.children[3].onclick = () =>
            cartConstructor.updateProductQuantity(item.product.id, 1);
        div.children[4].onclick = () =>
            cartConstructor.removeProduct(item.product.id);

        container.appendChild(div);
    });

    const net = cartConstructor.calculateTotal();
    const gross = net * (1 + VAT);

    container.innerHTML += `
        <p>Netto: $${net.toFixed(2)}</p>
        <p>Käibemaks: $${(gross - net).toFixed(2)}</p>
        <p>Kokku: $${gross.toFixed(2)}</p>
        <button id="clear">Tühjenda</button>
    `;

    document.getElementById("clear").onclick = () => {
        cartConstructor.clear();
        displayCartView();
    };
};

