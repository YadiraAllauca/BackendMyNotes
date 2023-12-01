const Note = require("../models/Note");

exports.addNote = async (req, res) => {
  try {
    let note;
    note = new Note(req.body);
    await note.save();
    res.send(note);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al registrar la nota");
  }
};


exports.loadNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al cargar el listado");
  }
};

exports.updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    let note= await Note.findById(req.params.id);
    if (!note) {
      res.status(404).json({ msg: "No existe la alquiler" });
    }
    note.title = title;
    note.content = content;
    note = await Note.findOneAndUpdate(
      { _id: req.params.id },
      note,
      {
        new: true,
      }
    );
    res.json(note);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al actualizar el registro");
  }
};

exports.deleteNote = async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404).json({ msg: "No existe la nota" });
    }
    await Note.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Nota eliminada con éxito" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al eliminar el registro");
  }
};
