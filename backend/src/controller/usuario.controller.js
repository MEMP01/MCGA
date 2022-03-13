const usuarioCtrl ={}

const Usuario= require ('../models/Usuario')

//get

usuarioCtrl.getUsuario= async(req, res)=>{
const usuarios = await Usuario.find()
res.json(usuarios)
}

//post
usuarioCtrl.createUsuario= async(req, res)=>{
    const { nombre, apellido, correo, telefono, edad} = req.body;
    const newUsuario = new Usuario({
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        telefono:telefono,
        edad: edad
    })
    await newUsuario.save();
    res.json({message: "el usuario ha sido creado"})
}


usuarioCtrl.getUsuario= async(req, res)=>{
    
}

usuarioCtrl.getUsuario= async(req, res)=>{
    
}

usuarioCtrl.getUsuario= async(req, res)=>{
    
}