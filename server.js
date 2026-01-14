import fs from "fs";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static("public"));



export const fetchAndSaveProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    const data = response.data;

    await fs.writeFile("./data/products.json", JSON.stringify(data, null, 2));
};

app.get("/api/products", (req, res) => {
    const products = JSON.parse(fs.readFileSync("./data/products.json"));
    res.json(products);
});

app.get("/api/products/category/:category", (req, res) => {
    const { category } = req.params;
    const products = JSON.parse(fs.readFileSync("./data/products.json"));

    const filtered = products.filter(
        p => p.category === category
    );

    res.json(filtered);
});

app.get("/api/categories", (req, res) => {
    const products = JSON.parse(fs.readFileSync("./data/products.json"));
    const categories = [...new Set(products.map(p => p.category))];
    res.json(categories);
});

app.get("/api/categories", (req, res) => {
    const id = Number(req.params.id);
    const products = JSON.parse(fs.readFileSync("products.json"));
    const product = 
})






app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,"public", "index.html"));
});

app.listen(PORT, () =>{
    console.log(`Server töötab: http://localhost:${PORT}`);
})