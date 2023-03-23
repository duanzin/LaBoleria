import { getAllOrders, getCake, getClient, getClientOrder, getOrder, postOrder } from "../repositories/orderRepository.js";

export async function createOrder(req, res) {
  try {
    const clientExists = await getClient(req.body.clientId);
    const cakeExists = await getCake(req.body.cakeId);
    if (!cakeExists.rows || !clientExists.rows) {
      return res.sendStatus(404);
    }

    await postOrder(req.body);
    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getOrders(req, res) {
  try {
    const orders = await getAllOrders();
    if (orders.rows.length == 0) {
      return res.sendStatus(404);
    }

    res.status(200).send(orders);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getOrderbyId(req, res) {
  try {
    const orders = await getOrder(req.params.id);
    if (orders.rows.length == 0) {
      return res.sendStatus(404);
    }

    res.status(200).send(orders);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getOrderbyClient(req, res) {
  try {
    const orders = await getClientOrder(req.params.id);
    if (orders.rows.length == 0) {
      return res.sendStatus(404);
    }

    res.status(200).send(orders);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
