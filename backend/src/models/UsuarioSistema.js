const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const UsuarioSistemaSchema = new Schema({
  nombreDeUsuario: {
    type: String,
    required: true,
    unique: true,
  },
  constraseña: {
    type: String,
    required: true,
  },
  fechaDeCreacion: {
    type: Date,
    default: new Date(),
  },
});

UsuarioSistemaSchema.methods.encriptarcontraseña = async (constraseña) => {
  const salt = await bcrypt.getSalt(10);
  return bcrypt.hash(constraseña, salt);
};

UsuarioSistemaSchema.methods.confirmarcontraseña = function (constraseña) {
  return bcrypt.compare(constraseña, this.constraseña);
};
module.exports = model("User", UsuarioSistemaSchema);
