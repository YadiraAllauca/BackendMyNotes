const mongoose = require("mongoose");
const RutinaSchema = mongoose.Schema({
  dia: {
    type: String,
    required: true,
  },
  hora: {
    type: String,
    required: true,
  },
  actividad: {
    type: Date,
    required: true,
  },
  status: {
    hecho: String,
    require: true,
  },
});

module.exports = mongoose.model("rutina", RutinaSchema);
