const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { banco } = require("./db");
const bcrypt = require("bcrypt");


const Create = async (nome, email, senhaHash) => {
    try {
        const data = await banco.query(
            "INSERT INTO usuarios (nome, email, senha) VALUES ( ?, ?, ?)",
            [nome, email, senhaHash] // aqui usamos a senha já criptografada
        );

        return data[0];
    } catch (error) {
        console.log("Erro ao conectar ao banco de dados: ", error.message);
        throw new Error("Falha ao executar a ação!");
    }
};

const Login = async (email, senha) => {
    try {

        const [rows] = await banco.query(
            "SELECT id, email, senha, nome FROM usuarios WHERE email = ?",
            [email]
        );

        if (rows.length === 0) {
            return { success: false, message: "Email ou senha inválidos" };
        }

        const usuario = rows[0];

        if (usuario.status === "Banido") {
            return { success: false, message: "Usuário banido" };
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha);

        if (!senhaValida) {
            return { success: false, message: "Email ou senha inválidos" };
        }

        delete usuario.senha;

        return {
            success: true,
            data: {
                usuario,
            },
            message: "Login realizado com sucesso"
        };

    } catch (error) {
        console.error(error);
        return { success: false, message: "Erro interno no servidor" };
    }
};

const verificarprimeirologin = async (id) => {
    try {
        const data = await banco.query(
            "SELECT cadastrocompleto FROM usuarios WHERE id = ?",
            [id]
        );
        return data[0];
    } catch (error) {
        console.error(error);
        throw new Error("Erro ao verificar primeiro login");
    }
};

const definirsalario = async (id, salario) => {
    try {
        const data = await banco.query(
            "UPDATE usuarios SET salario = ?, cadastrocompleto = 1 WHERE id = ?",
            [salario, id]
        );
        return data[0];
    } catch (error) {
        console.error(error);
        throw new Error("Erro ao definir salário");
    }
};



module.exports = { Create, Login, verificarprimeirologin, definirsalario };