const express = require('express');
const { checkConnection } = require("./src/model/db");
const cors = require('cors');
const path = require('path');
const app = express()
const dotenv = require("dotenv");
dotenv.config();
const Port = process.env.APP_PORT;  
app.use(cors());
app.use(express.json());


app.get("/", (request, response) => {
    response.send({ "message:": "Servidor rodando!" });
});

app.listen(Port, () => {
    console.log(`Servidor rodando na porta: ${Port}`);
});

const rotasUsuarios = require("./src/routers/usuariosRouters");
const rotasTransacoes = require("./src/routers/transacoesRouters");


app.use("/usuarios", rotasUsuarios);
app.use("/transacoes", rotasTransacoes);
