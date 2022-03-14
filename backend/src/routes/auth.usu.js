const express = require("express");
const router = express.Router();
const { singin, singup } = require("../controller/auth.controller");

router.post("/singin", singin); //para el login
router.post("/singup", singup); //para el regisrto

module.exports = router;
