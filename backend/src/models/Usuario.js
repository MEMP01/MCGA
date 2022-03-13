const{Schema, model}=require('mongoose')

//creo el modelo de la lista usuario
const usuarioSchema = new Schema({
    nombre : String,
    apellido : String,
    edad : Number,
    telefono: Number,
    correo: String
},
{
    //para almacenar de manera automantica cuando se crea y se modifica el registro
timestamps: true
}
)

//todo elemento de tipo Usuario sera con el formato de usuarioSchema
module.exports= model('Usuario', usuarioSchema)