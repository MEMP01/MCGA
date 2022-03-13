const usuarioCtrl = {};

const Usuario = require("../models/Usuario");

//get

usuarioCtrl.getUsuario = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (err) {
    console.log("no se pudo obtener la lista de usuarios");
    res.status(500).send(err);
  }
};

//post
usuarioCtrl.createUsuario = async (req, res) => {
  try {
    const { nombre, apellido, edad, telefono, correo } = req.body;
    const newUsuario = new Usuario({
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      telefono: telefono,
      edad: edad,
    });
    await newUsuario.save();
    res.json({ message: "el usuario ha sido creado" });
  } catch (err) {
    console.log("no se pudo crear el usuario");
    res.status(500).send(err);
  }
};

//buscar uno solo usuario en particular
usuarioCtrl.getUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
  } catch (err) {
    console.log("no se pudo obtener el usuario que busca");
    res.status(500).send(err);
  }
};

//borrar usuario
usuarioCtrl.deleteUsuario = async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({ message: "usuario ha sido eliminado" });
  } catch (err) {
    console.log(
      "no se pudo eliminar el usuario seleccionado de la lista de usuarios"
    );
    res.status(500).send(err);
  }
};

//put, modificar un usuario
usuarioCtrl.updateUsuario = async (req, res) => {
  try {
    const { nombre, apellido, edad, telefono, correo } = req.body;

    await Usuario.findByIdAndUpdate(req.params.id, {
      nombre,
      apellido,
      edad,
      telefono,
      correo,
    });
    res.json({ message: "el usuario ha sido actualizado" });
  } catch (err) {
    console.log(
      "no se pudo modificar el usuario seleccionado de la lista de usuarios"
    );
    res.status(500).send(err);
  }
};
