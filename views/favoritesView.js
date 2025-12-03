export const displayFavoritesView = (favorites) => {
    const container = document.getElementById('favourite-view');
    container.innerHTML = '';  

    const favoritesContainer = document.createElement('div');
    favoritesContainer.classList.add('favorites-container');

    if (favorites.length === 0) {
        favoritesContainer.innerHTML = '<p>Teie lemmikud on tühjad.</p>';
    } else {
        favorites.forEach(favorite => {
            const favoriteItem = document.createElement('div');
            favoriteItem.classList.add('favorite-item');
            favoriteItem.innerHTML = `
                <p>${favorite.name}</p>
                <p>Hind: $${favorite.price.toFixed(2)}</p>
            `;
            favoritesContainer.appendChild(favoriteItem);
        });
    }

    container.appendChild(favoritesContainer);
};
