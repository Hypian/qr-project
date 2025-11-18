"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const generate_1 = require("./qr/generate");
const menu_1 = require("./menu/menu");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.static("public"));
app.get("/menu", (req, res) => {
    const menu = (0, menu_1.getMenu)();
    res.json(menu);
});
app.get("/generate-qr", (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.status(400).send("URL is required");
    }
    const qrCodeImage = (0, generate_1.generateQRCode)(url);
    res.type("image/png").send(qrCodeImage);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
