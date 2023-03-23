import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cakeRouter from "./routes/cakeRouter.js";
import clientRouter from "./routes/clientRouter.js";
import orderRouter from "./routes/orderRouter.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use([cakeRouter, clientRouter, orderRouter]);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port: ${port}`));
