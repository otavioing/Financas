import { Image } from "expo-image";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Graficocircular from "../../components/GraficoCircular";

export default function HomeScreen() {

  const [mostrarmenu, setMostrarmenu] = useState(false);
  

  const dados = [
    { label: "Comida", value: 40, color: "#FF6384" },
    { label: "Transporte", value: 25, color: "#36A2EB" },
    { label: "Lazer", value: 20, color: "#FFCE56" },
    { label: "Outros", value: 15, color: "#4BC0C0" },
    { label: "Saúde", value: 10, color: "#9966FF" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Inicio</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.salariorestante}>
          <View style={styles.containerinfosalariorestante}>
            <Text style={styles.textsalario}>Salario restante</Text>
            <Text style={styles.textvalor}>R$ 1.200.000</Text>
            <Text style={styles.textpercentual}>100%</Text>
          </View>
          <View style={styles.containereditinfos}>
            <TouchableOpacity onPress={() => { setMostrarmenu(!mostrarmenu) }} style={styles.botaomais}>
              <Text style={styles.textmais}>+</Text>
            </TouchableOpacity>
          </View>

          <View  style={[styles.containereditinfoss, { display: mostrarmenu ? 'flex' : 'none' }]}>
            <TouchableOpacity style={styles.botaoopcoes}>
              <Text style={styles.textopcoes}>Adicionar gasto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoopcoes}>
              <Text style={styles.textopcoes}>Adicionar receita</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoopcoes}>
              <Text style={styles.textopcoes}>Remover receita</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoopcoes}>
              <Text style={styles.textopcoes}>Remover gasto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoopcoes}>
              <Text style={styles.textopcoes}>Editar salario</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoopcoes}>
              <Text style={styles.textopcoes}>Editar orçamento</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containertitulotexto}>
          <Text style={styles.texttitulocategoria}>Gráfico por categoria</Text>
        </View>
        <View style={styles.containergraficoporgastos}>
          <View style={styles.containertextogerafico}>
            <Text style={styles.texttituloporcategoria}>
              Salario gasto esse mês
            </Text>
            <Text style={styles.textvalor}>R$ 1.200,00</Text>
          </View>

          <View>
            <Graficocircular
              data={dados}
              size={160}
              innerRadius={60}
              onSlicePress={(slice) => alert(`${slice.label}: ${slice.value}`)}
            />
          </View>
        </View>
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
    alignItems: "center",
    gap: 10,
    padding: 10,
  },
  salariorestante: {
    width: "100%",
    padding: 10,
    backgroundColor: "#ffffffff",
    borderRadius: 5,
    flexDirection: "row",
    gap: 5,
    justifyContent: "space-between",
  },
  containerinfosalariorestante: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 5,
    padding: 15,
  },
  textsalario: {
    fontSize: 16,
    color: "#000000",
  },
  textvalor: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
  },
  textpercentual: {
    fontSize: 14,
    color: "#000000",
  },
  containereditinfos: {
    alignItems: "flex-start",
    width: "10%",
  },
  botaomais: {
    width: 30,
    height: 30,
    backgroundColor: "#36A2EB",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textmais: {
    fontSize: 18,
    color: "#ffffff",
  },
  containereditinfoss: {
    position: "absolute",
    top: 38,
    right: 38,
    width: 150,
    height: 230,
    zIndex: 1,
    backgroundColor: "#36A2EB",
    borderRadius: 5,
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 15,
  },
  botaoopcoes: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 2,
  },
  textopcoes: {
    fontSize: 14,
    color: "#ffffff",
  },
  containergraficoporgastos: {
    width: "100%",
    height: 430,
    backgroundColor: "#ffffffff",
    borderRadius: 5,
  },
  containertitulotexto: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 15,
  },
  containertextogerafico: {
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 15,
  },
  texttitulocategoria: {
    fontSize: 20,
    fontWeight: "bold",
  },
  texttituloporcategoria: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
