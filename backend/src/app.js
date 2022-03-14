const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");

//configuracion

//se guarda en la variable port en la constante app,
// se almacenara el puerto que que se este escuchando O se utilizara por defecto el puerto 4000
app.set("port", process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan());

//bodyparsers
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json);
//rutas

app.get("/", (req, res) => {
  res.send("Bienvenido a mi api rest full");
});

//rutas para nuestra api de usuarios
app.use(require("./routes/auth.usu"));
app.use("/api/usuario", require("./routes/usuario"));

//se exporta para poder usar el archivo app en otra parte del projecto
module.exports = app;
