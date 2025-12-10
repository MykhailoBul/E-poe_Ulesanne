import { customerConstructor } from '../constructors/Customer.js';

export const displayFavoritesView = () => {
    const favorites = customerConstructor.getAllFavorites();

    const container = document.getElementById('main-container');
    container.innerHTML = '<h2>Lemmikud</h2>';

    favorites.forEach(favorite => {
        const favoriteItemElement = document.createElement('div');
        favoriteItemElement.classList.add('favorite-item');
        favoriteItemElement.innerHTML = `
            <p>${favorite.product.title}</p>
            <p>Hind: $${favorite.product.price.toFixed(2)}</p>
        `;
        container.appendChild(favoriteItemElement);
    });
};
