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

UsuarioSistemaSchema.methods.EN;

module.exports = model("User", UsuarioSistemaSchema);
