const {Router} = require('express');
const myController = require("../Controller/usuarioController");

const rota = Router()

rota.get("/verificarprimeirologin/:id", myController.verificarprimeirologin);
rota.post("/create", myController.Create);
rota.post("/login", myController.Login);
rota.post("/definirsalario", myController.definirsalario);

module.exports = rota;