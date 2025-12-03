export const displayProductDetailView = (product) => {
    const container = document.getElementById('detailed-view');
    container.innerHTML = '';  // Очищаем предыдущий контент

    const productDetail = document.createElement('div');
    productDetail.classList.add('product-detail');

    productDetail.innerHTML = `
        <h3>${product.name}</h3>
        <p>Kategooria: ${product.category}</p>
        <p>Hind: $${product.price.toFixed(2)}</p>
        <button id="add-to-cart">Lisa ostukorvi</button>
    `;

    container.appendChild(productDetail);
};