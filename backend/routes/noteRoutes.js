const express = require("express");
const {getNotes, createNote} = require("../controllers/notesController");
const protect = require("../middlewares/authMiddleware");
const { route } = require("./userRoutes");
const router = express.Router();


router.route("/").get(protect, getNotes);
router.route("/create").post(protect, createNote);
router.route(":/").get().put().delete();

module.exports = router;