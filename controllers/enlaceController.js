const Enlace = require("../models/Enlace");

exports.addEnlace = async (req, res) => {
  try {
    let enlace;
    enlace = new Enlace(req.body);
    await enlace.save();
    res.send(enlace);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al registrar el enlace");
  }
};

exports.loadEnlaces = async (req, res) => {
  try {
    const enlaces = await Enlace.find();
    res.json(enlaces);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al cargar el listado");
  }
};

exports.updateEnlace = async (req, res) => {
  try {
    const { pagina, titulo, sobre, hipervinculo } = req.body;
    let enlace = await Enlace.findById(req.params.id);
    if (!enlace) {
      res.status(404).json({ msg: "No existe la alquiler" });
    }
    (enlace.pagina = pagina),
      (enlace.titulo = titulo),
      (enlace.sobre = sobre),
      (enlace.hipervinculo = hipervinculo),
      (enlace = await Enlace.findOneAndUpdate({ _id: req.params.id }, enlace, {
        new: true,
      }));
    res.json(enlace);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al actualizar el registro");
  }
};

exports.deleteEnlace = async (req, res) => {
  try {
    let enlace = await Enlace.findById(req.params.id);
    if (!enlace) {
      res.status(404).json({ msg: "No existe la enlace" });
    }
    await Enlace.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Enlace eliminada con éxito" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al eliminar el registro");
  }
};
