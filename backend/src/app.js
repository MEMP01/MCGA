const express = require("express");
const cors = require("cors");
const app = express();
//configuracion

//se guarda en la variable port en la constante app,
// se almacenara el puerto que que se este escuchando O se utilizara por defecto el puerto 4000
app.set("port", process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());

//rutas

app.get("/", (req, res) => {
  res.send("Bienvenido a mi api rest full");
});

//se exporta para poder usar el archivo app en otra parte del projecto
module.exports = app;
