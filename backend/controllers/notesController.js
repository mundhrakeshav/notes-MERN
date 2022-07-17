const { create } = require("../models/noteModel");
const Note = require("../models/noteModel");

const getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

const createNote = async (req, res) => {
  const { title, content, category } = req.body;
  const note = new Note({ user: req.user._id, title, content, category });
  const createdNote = await note.save();
  res.status(200).json(createdNote);
};

module.exports = { getNotes, createNote };
