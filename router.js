import { displayFavoritesView } from "./views/favoritesView.js";
import { displayProductDetailView } from "./views/productDetailView.js";
import { displayCartView } from "./views/cartView.js";
import { displayAllProductsView } from "./views/allProductsView.js";

export const navigate = (view, param) => {
    if (view === "favorites") location.hash = "#/favorites";
    if (view === "cart") location.hash = "#/cart";
    if (view === "productDetail") location.hash = `#/product/${param.id}`;
    if (view === "allProducts") location.hash = "#/";
};

export const handleRoute = (products) => {
    const hash = location.hash;

    if (hash === "#/favorites") {
        displayFavoritesView();
        return;
    }

    if (hash === "#/cart") {
        displayCartView();
        return;
    }

    if (hash.startsWith("#/product/")) {
        const id = Number(hash.split("/")[2]);
        const product = products.find(p => p.id === id);
        if (product) displayProductDetailView(product);
        return;
    }

    displayAllProductsView(products);
};
