const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.addUser = async (req, res) => {
  try {
    const { name, lastname, nickname, password } = req.body;
    const newUser = new User({ name, lastname, nickname, password });
    await newUser.save();
    const token = jwt.sign({ _id: newUser._id }, "llave");
    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al registrar la usuario");
  }
};
exports.getUserByToken = async (req, res) => { 
  const { token } = req.body;
  const user = jwt.decode(token);
  res.status(200).json({ user });
}


exports.signIn = async (req, res) => {
  try {
    const { nickname, password } = req.body;
    const user = await User.findOne({ nickname });
    if (!user) return res.status(404).send("No existe el usuario");
    if (user.password !== password)
      return res.status(404).send("Contraseña incorrecta");
    const token = jwt.sign({ _id: user._id }, "llave");
    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al cargar el registro");
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { name, lastname, nickname, password } = req.body;
    let user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ msg: "No existe el usuario" });
    }
    user.name = name;
    user.lastname = lastname;
    user.nickname = nickname;
    user.password = password;

    user = await User.findOneAndUpdate({ _id: req.params.id }, user, {
      new: true,
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al actualizar el registro");
  }
};
exports.findUser = async (req, res) => {
  try {
    const { nickname } = req.body;
    const user = await User.findOne({ nickname });
    // if (!user) return res.status(401).json("no hay");
    res.status(200).json({ _id: user._id });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al cargar el registro");
  }
};

exports.findUserByID = async (req, res) => {
  try {
    const { _id } = req.body;
    const user = await User.findOne({ _id });
    if (!user) return res.status(401).json("no hay");
    res.status(200).json({user});
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al cargar el registro");
  }
};
exports.loadUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al cargar el listado");
  }
};
