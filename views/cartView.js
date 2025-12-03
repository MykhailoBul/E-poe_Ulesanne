export const displayCartView = (cart) => {
    const container = document.getElementById('cart-view');
    container.innerHTML = '';  // Очищаем предыдущий контент

    const cartContainer = document.createElement('div');
    cartContainer.classList.add('cart-container');

    if (cart.items.length === 0) {
        cartContainer.innerHTML = '<p>Teie ostukorv on tühi.</p>';
    } else {
        cart.items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <p>${item.product.name} x${item.quantity}</p>
                <p>Hind: $${(item.product.price * item.quantity).toFixed(2)}</p>
            `;
            cartContainer.appendChild(itemElement);
        });

        const totalPrice = cart.calculateTotal();
        const totalElement = document.createElement('div');
        totalElement.innerHTML = `<p>Kogusumma: $${totalPrice.toFixed(2)}</p>`;
        cartContainer.appendChild(totalElement);
    }

    container.appendChild(cartContainer);
};