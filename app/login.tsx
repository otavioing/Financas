import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Link, router } from "expo-router";
import React, { useEffect, useState } from 'react';
import api from "@/src/services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";





export default function login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);


  const handleLogin = async () => {
    try {

      setLoading(true);

      const response = await api.post("/usuarios/login", {
        email: email,
        senha: senha
      });

      if (response.data.success) {

        const usuario = response.data.data.usuario;

        await AsyncStorage.setItem("usuario", JSON.stringify(usuario));

        router.replace("/(tabs)");
      } else {
        alert(response.data.message);
      }

    } catch (error: any) {
      console.log(error.response?.data || error.message);
      alert("Erro ao conectar com o servidor");
    } finally {
      setLoading(false);
    }
  };




  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
      </View>
      <View style={styles.main}>
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder="Senha" value={senha} onChangeText={setSenha} />

        {!(email && senha) ? (
          <TouchableOpacity style={styles.buttonoff} disabled>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
              {loading ? "Entrando..." : "Entrar"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.footer}>
        <Text>
          Não possui uma conta?{" "}
          <Link style={styles.link} href="/cadastro">
            Cadastre-se
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
