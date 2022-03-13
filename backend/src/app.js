
const express = require ('express')
const cors =require ('cors')
const app = express();
//configuracion

//se guarda en la variable port en la constante app, 
// se almacenara el puerto que que se este escuchando O se utilizara por defecto el puerto 4000
app.set('port', process.env.PORT || 4000)

//se exporta para poder usar el archivo app en otra parte del projecto
module.exports=app;