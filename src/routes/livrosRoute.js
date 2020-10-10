const express = require("express");
const router = express.Router();
const controller = require("../controller/livrosController");

router.get("/", controller.getAllLivro);
router.get("/:id", controller.getByIdLivro);
router.post("/", controller.postLivro);
router.delete("/:id", controller.deleteLivro);

module.exports = router;