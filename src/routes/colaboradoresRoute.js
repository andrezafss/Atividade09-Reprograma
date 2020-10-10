const express = require("express");
const router = express.Router();
const controller = require("../controller/colaboradoresController");

router.get("/", controller.getAll);
router.get("/tarefas", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.postColaborador);
router.delete("/:id", controller.deleteColaborador);

module.exports = router;
