const mongoose = require("mongoose");
const TareaSchema = mongoose.Schema({
  pagina: {
    type: String,
    required: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  sobre: {
    type: Date,
    required: true,
  },
  hipervinculo: {
    hecho: String,
    require: true,
  },
});

module.exports = mongoose.model("tarea", TareaSchema);
