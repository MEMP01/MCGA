const { Router } = require("express");
const router = Router();

const {
  createUsuario,
  getListaUsuario,
  getUsuario,
  deleteUsuario,
  updateUsuario,
} = require("../controller/usuario.controller");

router.route("/").get(getListaUsuario).post(createUsuario);

router.route("/:id").get(getUsuario).delete(deleteUsuario).put(updateUsuario);

module.exports = router;
