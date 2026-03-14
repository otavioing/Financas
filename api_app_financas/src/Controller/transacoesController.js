const model = require("../model/transacoesService");


const TransacoesController = {

    createcreate: async (request, response) => {
        try {
            const { usuario_id, categoria_id, descricao, valor, tipo } = request.body;
            const result = await model.create(usuario_id, categoria_id, descricao, valor, tipo);
            response.status(201).json(result);
        } catch (error) {
            console.error("Erro ao criar transação:", error);
            response.status(500).json({ error: "Erro ao criar transação" });
        }
    },

    deletar: async (request, response) => {
        try {
            const { id } = request.params;
            await model.deletar(id);
            response.status(200).send({ message: "Transação deletada com sucesso!" });
        } catch (error) {
            console.error("Erro ao deletar transação:", error);
            response.status(500).json({ error: "Erro ao deletar transação" });
        }
    },

    selectporuserecategoria: async (request, response) => {
        try {
            const { usuario_id, categoria_id } = request.params;

            const result = await model.selectporuserecategoria(usuario_id, categoria_id);

            response.status(200).json(result);

        } catch (error) {
            console.error("Erro ao selecionar transações por usuário e categoria:", error);
            response.status(500).json({ error: "Erro ao selecionar transações por usuário e categoria" });
        }
    },



};

module.exports = TransacoesController;