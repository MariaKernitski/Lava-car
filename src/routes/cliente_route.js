/* Definir os serviços que sua aplicação vai ter */

import { Router } from "express";
import { destroy, index, show, store, update } from "../controllers/cliente_controller";

const router = Router();

router.post("/", store);
router.get("/", index);
router.get("/:id", show);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;
