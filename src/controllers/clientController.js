import { postClient } from "../repositories/clientRepository.js";

export async function createClient(req, res) {
    try {
      await postClient(req.body);
      res.sendStatus(201);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }