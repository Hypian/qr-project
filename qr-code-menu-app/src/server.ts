import express, { Request, Response } from "express";
import { generateQRCode } from "./qr/generate";
import { getMenu } from "./menu/menu";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/menu", (req: Request, res: Response) => {
  const menu = getMenu();
  res.json(menu);
});

app.get("/generate-qr", (req: Request, res: Response) => {
  const url = req.query.url as string;
  if (!url) {
    return res.status(400).send("URL is required");
  }
  const qrCodeImage = generateQRCode(url);
  res.type("image/png").send(qrCodeImage);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
