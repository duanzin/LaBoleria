import { getCake, postCake } from "../repositories/cakeRepository.js";

export async function createCake(req, res) {
    try {
      const cakeExists = await getCake(req.body.name);
      if (cakeExists.rows.length !== 0) {
        return res.sendStatus(409);
      }
  
      await postCake(req.body);
      res.sendStatus(201);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }