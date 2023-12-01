const express = require("express");
const router = express.Router();
const rutinaController = require("../controllers/rutinaController");

router.post("/", rutinaController.addRutina);
router.get("/", rutinaController.loadRutinas);
router.put("/:id", rutinaController.updateRutina);
router.delete("/:id", rutinaController.deleteRutina);

module.exports = router;
