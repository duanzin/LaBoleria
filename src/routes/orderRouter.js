import { Router } from "express";
import { orderSchema } from "../schemas/orderSchema.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import {
  createOrder,
  getOrderbyClient,
  getOrderbyId,
  getOrders,
} from "../controllers/orderController.js";

const orderRouter = Router();

orderRouter.post("/order", validateSchema(orderSchema), createOrder);
orderRouter.get("/orders", getOrders);
orderRouter.get("/orders/:id", getOrderbyId);
orderRouter.get("/clients/:id/orders", getOrderbyClient);

export default orderRouter;