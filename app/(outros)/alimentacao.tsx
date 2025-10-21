import { Image } from "expo-image";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,

} from "react-native";

const seta_voltar = require("../../assets/images/seta_voltar.png");

export default function alimentacao() {

  function voltar_orcamentos() {
    // Navegar para a tela de orçamentos
    router.push('/(tabs)/orcamentos');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={voltar_orcamentos}>
          <Image source={seta_voltar} style={styles.backButtonimg} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Alimentação</Text>
      </View>
      <View style={styles.main}>
        
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
    flexDirection: 'row',
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
  backButton:{
    justifyContent: "center",
    alignItems: "flex-end",
    height: 70,
    position: 'absolute',
    left: 15,
    top: 20,
  },
  backButtonimg:{
    width: 24,
    height: 24,
  }
  
});