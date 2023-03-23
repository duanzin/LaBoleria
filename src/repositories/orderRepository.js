import { db } from "../config/database.js";

export async function getClient(id) {
  return db.query(`SELECT * FROM clients WHERE id = $1`, [id]);
}

export async function getCake(id) {
  return db.query(`SELECT * FROM cakes WHERE id = $1`, [id]);
}

export async function postOrder(order) {
  const { clientId, cakeId, quantity, totalPrice } = order;
  return db.query(
    `INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice") VALUES($1, $2, $3, $4)`,
    [clientId, cakeId, quantity, totalPrice]
  );
}

export async function getAllOrders() {
  return db.query(
    `SELECT clients AS client, cakes AS cake, orders.id AS "orderId", "createdAt", quantity, "totalPrice" 
    FROM orders JOIN clients ON orders."clientId" = clients.id 
    JOIN cakes ON orders."cakeId" = cakes.id`
  );
}

export async function getOrder(id) {
  return db.query(
    `SELECT clients AS client, cakes AS cake, orders.id AS "orderId", "createdAt", quantity, "totalPrice" 
    FROM orders JOIN clients ON orders."clientId" = clients.id 
    JOIN cakes ON orders."cakeId" = cakes.id WHERE orders.id = $1;`,
    [id]
  );
}

export async function getClientOrder(id) {
  return db.query(
    `SELECT orders.id AS "orderId", "createdAt", quantity, "totalPrice", cakes.name AS "cakeName"
    FROM orders JOIN cakes ON orders."cakeId" = cakes.id 
	  WHERE orders."clientId" = $1;`,
    [id]
  );
}
