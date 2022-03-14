const { Schema, model } = require("mongoose");

//creo el modelo de la lista usuario
const usuarioSchema = new Schema(
  {
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    edad: { type: Number, required: true },
    telefono: { type: Number, required: true },
    correo: { type: String, required: true },
  },
  {
    //para almacenar de manera automantica cuando se crea y se modifica el registro
    timestamps: true,
  }
);

//todo elemento de tipo Usuario sera con el formato de usuarioSchema
module.exports = model("Usuario", usuarioSchema);
