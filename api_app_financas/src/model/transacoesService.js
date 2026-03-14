const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { banco } = require("./db");

const create = async (usuario_id, categoria_id, descricao, valor, tipo) => {
    try {
        const query = `
        INSERT INTO transacoes 
        (usuario_id, categoria_id, descricao, valor, tipo) 
        VALUES (?, ?, ?, ?, ?)`;

        const values = [usuario_id, categoria_id, descricao, valor, tipo];

        const [result] = await banco.query(query, values);

        return {
            id: result.insertId,
            usuario_id,
            categoria_id,
            descricao,
            valor,
            tipo
        };

    } catch (error) {
        console.error("Erro ao criar transação:", error);
        throw error;
    }
};


const deletar = async (id) => {
    try {
        const query = "DELETE FROM transacoes WHERE id = ?";
        await banco.query(query, [id]);
        return { message: "Transação deletada com sucesso" };
    } catch (error) {
        console.error("Erro ao deletar transação:", error);
        throw error;
    }
};

const selectporuserecategoria = async (usuario_id, categoria_id) => {
    try {
        const query = "SELECT * FROM transacoes WHERE usuario_id = ? AND categoria_id = ?";
        const [rows] = await banco.query(query, [usuario_id, categoria_id]);
        return rows;
    } catch (error) {
        console.error("Erro ao selecionar transações por usuário e categoria:", error);
        throw error;
    }
};

module.exports = {
    create,
    deletar,
    selectporuserecategoria
};