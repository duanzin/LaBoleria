import { db } from '../config/database.js';

export async function postClient(client) {
    const { name, address, phone } = client;
    return db.query(
      `INSERT INTO clients (name, address, phone) VALUES($1, $2, $3)`,
      [name, address, phone]
    );
  }