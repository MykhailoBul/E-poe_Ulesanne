export const displayProductDetailView = (product) => {
    const container = document.getElementById('detailed-view');
    container.innerHTML = ''; 

    const productDetail = document.createElement('div');
    productDetail.classList.add('product-detail');

    productDetail.innerHTML = `
        <h3>${product.title}</h3>
        <img src="${product.imageUrl}" alt="${product.title}" />
        <p>Kategooria: ${product.category}</p>
        <p>Hind: $${product.price.toFixed(2)}</p>
        <button id="add-to-cart">Lisa ostukorvi</button>
    `;

    container.appendChild(productDetail);
};