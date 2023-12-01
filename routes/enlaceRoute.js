const express = require("express");
const router = express.Router();
const enlaceController = require("../controllers/enlaceController");

router.post("/", enlaceController.addEnlace);
router.get("/", enlaceController.loadEnlaces);
router.put("/:id", enlaceController.updateEnlace);
router.delete("/:id", enlaceController.deleteEnlace);

module.exports = router;
