const {Router} = require('express');
const myController = require("../Controller/transacoesController");

const rota = Router()

rota.post("/create", myController.createcreate);
rota.get("/selectporuserecategoria/:usuario_id/:categoria_id", myController.selectporuserecategoria);
rota.delete("/deletar/:id", myController.deletar);

module.exports = rota;