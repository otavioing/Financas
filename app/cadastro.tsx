import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Link, router  } from "expo-router";
import React, { useState } from 'react';
import api from "@/src/services/api";


export default function cadastro() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [loading, setLoading] = useState(false);


  const handleCadastro = async () => {

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem");
      return;
    }

    try {

      setLoading(true);

      const response = await api.post("/usuarios/create", {
        nome: nome,
        email: email,
        senha: senha,
      });

      console.log(response.data);

      if (response.data.success) {
        router.push("/login");
      }

    } catch (error: any) {
      console.log(error.response?.data || error.message);
      alert("Erro ao cadastrar usuário");
    } finally {
      setLoading(false);
    }

  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Cadastro</Text>
      </View>
      <View style={styles.main}>
        <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} />
        <TextInput style={styles.input} placeholder="Confirmar Senha" secureTextEntry value={confirmarSenha} onChangeText={setConfirmarSenha} />

        {!(nome && email && senha && confirmarSenha) ? (
          <TouchableOpacity style={styles.buttonoff} disabled>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={handleCadastro}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
              {loading ? "Carregando..." : "Cadastrar"}
            </Text>
          </TouchableOpacity>
        )}

      </View>
      <View style={styles.footer}>
        <Text>
          Já possui uma conta?{" "}
          <Link style={styles.link} href="/login">
            Faça login
          </Link>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 70,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#e6e5e5ff",
  },
  headerText: {
    color: "#5c5b5bff",
    fontSize: 24,
    fontWeight: "bold",
  },
  main: {
    flex: 1,
    backgroundColor: "#e6e5e5ff",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#1380ed",
    borderRadius: 5,
    backgroundColor: "#dfdedeff",
  },
  button: {
    width: "70%",
    alignItems: "center",
    backgroundColor: "#1380ed",
    // backgroundColor: "#7d7d7dff",
    padding: 10,
    borderRadius: 5,
  },
  buttonoff: {
    width: "70%",
    alignItems: "center",
    backgroundColor: "#7d7d7dff",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  footer: {
    height: 100,
    backgroundColor: "#e6e5e5ff",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    color: "#1380ed",
    fontWeight: "bold",
  },
});
