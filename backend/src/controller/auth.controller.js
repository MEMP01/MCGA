const authMethods = {};
const ModeloDeUsuarioDelSistema = require("../models/UsuarioSistema");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//autenticar usuario
authMethods.singin = async (req, res) => {
  const { nombreDeUsuario, contraseña } = req.body;
  const User = await ModeloDeUsuarioDelSistema.findOne({
    nombreDeUsuario: nombreDeUsuario,
  });
  if (!User) {
    return res.json({
      auth: false,
      massage: "Nombre de usuario o contraseña incorrectos",
    });
  }
  const autenticate = User.confirmarcontraseña(contraseña);
  if (!autenticate)
    ({
      auth: false,
      massage: "Nombre de usuario o contraseña incorrectos",
    });
  const token = jwt.sign(User._id.toString(), process.env.SECURE_KEY);
  if (!token) {
    return res.json({
      auth: false,
      message: "There was a problem, try it again",
    });
  }
  return res.json({
    auth: true,
    token: token,
  });
};
//metodo para registrar usuario en el sistema
authMethods.singup = async (req, res) => {
  const { nombreDeUsuario, contraseña } = req.body;
  const newUser = new ModeloDeUsuarioDelSistema({
    nombreDeUsuario,
    contraseña,
  });
  newUser.contraseña = newUser.encriptarcontraseña(contraseña);
  await newUser.save();

  res.json({
    status: true,
    message: "usuario del sistema registrado exitosamente",
  });
};

//autenticar token
authMethods.confirmToken = async (req, res) => {
  const { token } = req.body;
  if (token === "") {
    return res.json({
      message: "token don't provide",
    });
  }

  const verify = jwt.verify(token, process.env.SECURE_KEY);
  if (!verify) {
    return res.json({
      message: "token don't provide",
    });
  }

  return res.json({
    auth: "valid",
    token: token,
  });
};

//exportar modulo
module.exports = authMethods;
