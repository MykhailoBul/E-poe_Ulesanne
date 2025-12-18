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
    
// export const displayCartView = (cart) => { const container = document.getElementById('cart-view'); 
//     container.innerHTML = '<h2>Ostukorv</h2>'; const cartContainer = document.createElement('div'); cartContainer.classList.add('cart-container'); if (cart.items.length === 0) { cartContainer.innerHTML = '<p>Teie ostukorv on tühi.</p>'; } else { cart.items.forEach(item => { const itemElement = document.createElement('div'); itemElement.classList.add('cart-item'); itemElement.innerHTML = <p>${item.product.title} x${item.quantity}</p> <p>Hind: $${(item.product.price * item.quantity).toFixed(2)}</p> ; cartContainer.appendChild(itemElement); }); const totalElement = document.createElement('div'); totalElement.innerHTML = <p>Kogusumma: $${cart.calculateTotal().toFixed(2)}</p>; cartContainer.appendChild(totalElement); } container.appendChild(cartContainer); }; allProductsView.js: export const displayAllProductsView = (products) => { const container = document.getElementById('main-container'); container.innerHTML = '<h2>Tooted</h2>'; const productsContainer = document.createElement('div'); productsContainer.classList.add('products-container'); products.forEach(product => { const productCard = document.createElement('div'); productCard.classList.add('product'); productCard.innerHTML = <h3>${product.title}</h3> <p>Kategooria: ${product.category}</p> <p>Hind: $${product.price.toFixed(2)}</p> <button id="favourites${product.id}">Lisa lemmikutesse</button> ; const cartButton = document.createElement('button'); cartButton.textContent = "Lisa ostukorvi"; productCard.appendChild(cartButton); productsContainer.append(productCard); }); container.append(productsContainer); }
