export const displayAllProductsView = (products) => {
    const container = document.getElementById('main-container');
    container.innerHTML = '<h2>Tooted</h2>';

    const productsContainer = document.createElement('div');
    productsContainer.classList.add('products-container');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product');

        productCard.innerHTML = `
            <h3>${product.title}</h3>
            <p>Kategooria: ${product.category}</p>
            <p>Hind: $${product.price.toFixed(2)}</p>
            <button id="favourites${product.id}">Lisa lemmikutesse</button>
        `;

        const cartButton = document.createElement('button');
        cartButton.textContent = "Lisa ostukorvi";

        productCard.appendChild(cartButton);

        productsContainer.append(productCard);
    });

    container.append(productsContainer);
}