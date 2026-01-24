import express from "express";
import session from "express-session";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PRODUCTS_FILE = path.join(__dirname, "data.json");
const FAVORITES_FILE = path.join(__dirname, "favorites.json");

// MIDDLEWARE 
app.use(express.json());

app.use(
    session({
        secret: "shop-secret",
        resave: false,
        saveUninitialized: true
    })
);

// FE
app.use(express.static(__dirname));

// HELPERS
const readJSON = (file) =>
    JSON.parse(fs.existsSync(file) ? fs.readFileSync(file) : "[]");

const writeJSON = (file, data) =>
    fs.writeFileSync(file, JSON.stringify(data, null, 2));

// PRODUCTS 

// 2.1 all products
app.get("/api/products", (req, res) => {
    res.json(readJSON(PRODUCTS_FILE));
});

// 2.2 products by category
app.get("/api/products/category/:category", (req, res) => {
    const products = readJSON(PRODUCTS_FILE);
    res.json(
        products.filter(p => p.category === req.params.category)
    );
});

// 2.3 list of categories
app.get("/api/categories", (req, res) => {
    const products = readJSON(PRODUCTS_FILE);
    const categories = [...new Set(products.map(p => p.category))];
    res.json(categories);
});

// 2.4 product by ID
app.get("/api/products/:id", (req, res) => {
    const products = readJSON(PRODUCTS_FILE);
    const product = products.find(p => p.id == req.params.id);
    res.json(product || {});
});

// FAVORITES 

// get client ID from session or create new
const getClientId = (req) => {
    if (!req.session.clientId) {
        req.session.clientId = Date.now().toString();
    }
    return req.session.clientId;
};

// GET all favorites
app.get("/api/favorites", (req, res) => {
    const clientId = getClientId(req);
    const data = readJSON(FAVORITES_FILE);
    res.json(data[clientId] || []);
});

// POST get/add/remove favorite
app.post("/api/favorites", (req, res) => {
    const clientId = getClientId(req);
    const data = readJSON(FAVORITES_FILE);
    const product = req.body;

    data[clientId] = data[clientId] || [];

    const index = data[clientId].findIndex(p => p.id === product.id);

    if (index !== -1) {
        data[clientId].splice(index, 1);
    } else {
        data[clientId].push(product);
    }

    writeJSON(FAVORITES_FILE, data);
    res.json(data[clientId]);
});

// DELETE
app.delete("/api/favorites/:id", (req, res) => {
    const clientId = getClientId(req);
    const data = readJSON(FAVORITES_FILE);

    data[clientId] = (data[clientId] || []).filter(
        p => p.id != req.params.id
    );

    writeJSON(FAVORITES_FILE, data);
    res.json(data[clientId]);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () =>
    console.log(`Server running: http://localhost:${PORT}`)
);
