
const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");


router.post("/", noteController.addNote);
router.get("/", noteController.loadNotes);
router.put("/:id", noteController.updateNote);
router.delete("/:id", noteController.deleteNote);

module.exports = router;
