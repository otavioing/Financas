import { Image } from "expo-image";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

const seta_voltar = require("../../assets/images/seta_voltar.png");
const img_cookie_card = require("../../assets/images/cookie.png");

export default function alimentacao() {
  function voltar_orcamentos() {
    // Navegar para a tela de orçamentos
    router.push("/(tabs)/orcamentos");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={voltar_orcamentos}>
          <Image source={seta_voltar} style={styles.backButtonimg} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Alimentação</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.Textadd}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <View style={styles.containersaldorestante}>
          <Text style={styles.textoRestante}>Restante</Text>
          <Text style={styles.textoValor}>R$ 2.000,00</Text>
          <Text style={styles.textoTotal}>de R$ 5.000,00</Text>

          <View style={styles.containerbarraorçamento}>
            <View style={styles.barraorçamentovazia}>
              <View style={styles.barraorçamento}></View>
            </View>
          </View>
        </View>

        <ScrollView>
          <View style={{ alignItems: "center", marginTop: 20, gap: 15 }}>
            <View style={styles.containercard}>
              <View style={styles.esquerda}>
                <View style={styles.containerfoto}>
                  <Image
                    source={img_cookie_card}
                    style={{ width: 30, height: 30 }}
                  />
                </View>
              </View>
              <View style={styles.direita}>
                <View>
                  <Text style={styles.textoNome}>Bk</Text>
                  <Text>12:43</Text>
                </View>
                <Text style={styles.textoValorcard}>R$ 90,00</Text>
              </View>
            </View>
          </View>
        </ScrollView>
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
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#e6e5e5ff",
    flexDirection: "row",
  },
  headerText: {
    color: "#5c5b5bff",
    fontSize: 24,
    fontWeight: "bold",
  },
  main: {
    flex: 1,
    backgroundColor: "#e6e5e5ff",
  },
  backButton: {
    justifyContent: "center",
    alignItems: "flex-end",
    height: 70,
    position: "absolute",
    left: 15,
    top: 20,
  },
  backButtonimg: {
    width: 24,
    height: 24,
  },
  addButton: {
    justifyContent: "center",
    alignItems: "flex-end",
    height: 70,
    position: "absolute",
    right: 15,
    top: 18,
  },
  Textadd: {
    fontSize: 30,
    color: "#a3a3a3ff",
  },
  containersaldorestante: {
    width: "100%",
    height: 100,
    alignItems: "center",
    marginTop: 40,
  },
  textoRestante: {
    fontSize: 15,
  },
  textoValor: {
    fontSize: 24,
    fontWeight: "bold",
  },
  textoTotal: {
    fontSize: 15,
    color: "#5c5b5bff",
  },
  containerbarraorçamento: {
    width: "150%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    position: "relative",
  },
  barraorçamentovazia: {
    width: "58%",
    height: 9,
    backgroundColor: "#cacbccff",
    borderRadius: 5,
  },
  barraorçamento: {
    width: "10%",
    height: 9,
    backgroundColor: "#4a90e2ff",
    borderRadius: 5,
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 1,
  },
  containercard: {
    width: "90%",
    height: 70,
    backgroundColor: "#ffffffff",
    flexDirection: "row",
    borderRadius: 10,
  },
  esquerda: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  containerfoto:{
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#e6f1fc",
    justifyContent: "center",
    alignItems: "center",
  },
  direita: {
    width: "80%",
    height: "100%",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  textoNome: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textoValorcard: {
    fontSize: 16,
    color: "#5c5b5bff",
  },
});
