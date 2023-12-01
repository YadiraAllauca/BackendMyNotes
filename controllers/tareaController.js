const Tarea = require("../models/Tarea");

exports.addTarea = async (req, res) => {
  try {
    let tarea;
    tarea = new Tarea(req.body);
    await tarea.save();
    res.send(tarea);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al registrar la tarea");
  }
};

exports.loadTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.json(tareas);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al cargar el listado");
  }
};

exports.updateTarea = async (req, res) => {
  try {
    const { dia, hora,actividad, estado } = req.body;
    let tarea = await Tarea.findById(req.params.id);
    if (!tarea) {
      res.status(404).json({ msg: "No existe la alquiler" });
    }
    tarea.dia = dia;
    tarea.hora = hora;
    tarea.actividad = actividad;
   tarea.estado = estado;
    tarea = await Tarea.findOneAndUpdate({ _id: req.params.id }, tarea, {
      new: true,
    });
    res.json(tarea);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al actualizar el registro");
  }
};

exports.deleteTarea = async (req, res) => {
  try {
    let tarea = await Tarea.findById(req.params.id);
    if (!tarea) {
      res.status(404).json({ msg: "No existe la tarea" });
    }
    await Tarea.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Tarea eliminada con éxito" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al eliminar el registro");
  }
};
