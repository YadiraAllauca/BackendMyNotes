const mongoose = require("mongoose");
const NoteSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  content: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("note", NoteSchema);
