import { db } from "../config/database.js";

export async function getCake(name) {
  return db.query(`SELECT * FROM cakes WHERE name = $1`, [name]);
}

export async function postCake(cake) {
  const { name, price, description, image } = cake;
  return db.query(
    `INSERT INTO cakes (name, price, description, image) VALUES($1, $2, $3, $4)`,
    [name, price, description, image]
  );
}
