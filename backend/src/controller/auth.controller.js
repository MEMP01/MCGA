const authMethods = {};
const ModeloDeUsuarioDelSistema = require("../models/UsuarioSistema");

authMethods.singin = async (req, res) => {};

authMethods.singup = async (req, res) => {
  const { nombreDeUsuario, contraseña } = req.body;
  const newUser = new ModeloDeUsuarioDelSistema({
    nombreDeUsuario,
    contraseña,
  });
  newUser.contraseña = await newUser.encriptarcontraseña(contraseña);
  return res.json(newUser);
};

module.exports = authMethods;
