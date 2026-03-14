const model = require("../model/usuariosService");
const bcrypt = require("bcrypt");

const UsuariosController = {

    Create: async (request, response) => {
        try {
            const { nome, email, senha } = request.body;
            const saltRounds = 10;
            const senhaHash = await bcrypt.hash(senha, saltRounds);
            await model.Create(nome, email, senhaHash);
            response.status(201).send({ message: "Usuário criado com sucesso!" });
        } catch (error) {
            console.error("Erro ao conectar ao banco de dados:", error.message);
            response.status(500).send({ message: "Falha ao criar usuário!" });
        }
    },

    Login: async (request, response) => {
        try {

            const { email, senha } = request.body;

            const result = await model.Login(email, senha);

            if (!result.success) {
                return response.status(400).send(result);
            }

            return response.status(200).send(result);

        } catch (error) {
            console.error("Erro no controller:", error);
            return response.status(500).send({
                success: false,
                message: "Erro interno no servidor"
            });
        }
    },

    verificarprimeirologin: async (request, response) => {
        try {
            const { id } = request.params;
            const result = await model.verificarprimeirologin(id);
            return response.status(200).send(result);
        } catch (error) {
            console.error("Erro no controller:", error);
            return response.status(500).send({
                success: false,
                message: "Erro interno no servidor"
            });
        }
    },

    definirsalario: async (request, response) => {
        try {
            const { id, salario } = request.body;
            await model.definirsalario(id, salario);
            return response.status(200).send({ message: "Salário definido com sucesso!" });
        } catch (error) {
            console.error("Erro no controller:", error);
            return response.status(500).send({
                success: false,
                message: "Erro interno no servidor"
            });
        }
    },

};


module.exports = UsuariosController;
