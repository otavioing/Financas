import { Image } from "expo-image";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Graficocircular from "../../components/GraficoCircular";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "@/src/services/api";


export default function HomeScreen() {

  const [mostrarmenu, setMostrarmenu] = useState(false);
  const [mostrarCaixa, setMostrarCaixa] = useState(false);
  const [mostrarSalario, setMostrarSalario] = useState(false);
  const [salario, setSalario] = useState("");




  const dados = [
    { label: "Alimentação", value: 0, color: "#FF6384" },
    { label: "Compras", value: 0, color: "#36A2EB" },
    { label: "Trasporte", value: 0, color: "#FFCE56" },
    { label: "Entretenimento", value: 0, color: "#4BC0C0" },
    { label: "Saúde", value: 0, color: "#9966FF" },
  ];

  const verificarPrimeiroLogin = async () => {
    try {

      const usuarioString = await AsyncStorage.getItem("usuario");

      if (!usuarioString) return;

      const usuario = JSON.parse(usuarioString);

      const response = await api.get(
        `/usuarios/verificarprimeirologin/${usuario.id}`
      );

      if (response.data[0].cadastrocompleto === 0) {
        setMostrarCaixa(true);
      }

    } catch (error) {
      console.log("Erro ao verificar primeiro login:", error);
    }
  };
  useEffect(() => {
    verificarPrimeiroLogin();
  }, []);



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Inicio</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.salariorestante}>
          <View style={styles.containerinfosalariorestante}>
            <Text style={styles.textsalario}>Salario restante</Text>
            <Text style={styles.textvalor}>R$ 000.000</Text>
            <Text style={styles.textpercentual}>100%</Text>
          </View>
          <View style={styles.containereditinfos}>
            <TouchableOpacity onPress={() => { setMostrarmenu(!mostrarmenu) }} style={styles.botaomais}>
              <Text style={styles.textmais}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.containereditinfoss, { display: mostrarmenu ? 'flex' : 'none' }]}>
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
            <Text style={styles.textvalor}>R$ 000,00</Text>
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
      {mostrarCaixa && (
        <View style={styles.overlay}>
          <View style={styles.caixaCentral}>

            <Text style={styles.tituloCaixa}>Complete seu cadastro</Text>

            <Text style={styles.textoCaixa}>
              Para usar o aplicativo você precisa informar seu salário e orçamento.
            </Text>

            <TouchableOpacity
              style={styles.botaoCaixa}
              onPress={() => {
                setMostrarCaixa(false);
                setMostrarSalario(true);
              }}            >
              <Text style={styles.textoBotaoCaixa}>Continuar</Text>
            </TouchableOpacity>

          </View>


        </View>
      )}

      {mostrarSalario && (
        <View style={styles.overlay}>
          <View style={styles.caixaCentral}>

            <Text style={styles.tituloCaixa}>Informe seu salário</Text>

            <TextInput
              style={styles.inputSalario}
              placeholder="Digite seu salário"
              keyboardType="numeric"
              value={salario}
              onChangeText={setSalario}
            />

            <TouchableOpacity
              style={styles.botaoCaixa}
              onPress={async () => {
                try {

                  const usuarioString = await AsyncStorage.getItem("usuario");

                  if (!usuarioString) return;

                  if (!salario) {
                    alert("Digite seu salário");
                    return;
                  }


                  const usuario = JSON.parse(usuarioString);

                  await api.post("/usuarios/definirsalario", {
                    id: usuario.id,
                    salario: Number(salario)
                  });


                  console.log("Salário salvo:", salario);

                  setMostrarSalario(false);

                } catch (error) {
                  console.log("Erro ao salvar salário:", error);
                }
              }}
            >
              <Text style={styles.textoBotaoCaixa}>Salvar</Text>
            </TouchableOpacity>


          </View>
        </View>
      )}
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
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  caixaCentral: {
    width: "80%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    gap: 15,
  },

  tituloCaixa: {
    fontSize: 20,
    fontWeight: "bold",
  },

  textoCaixa: {
    fontSize: 14,
    textAlign: "center",
  },

  botaoCaixa: {
    backgroundColor: "#36A2EB",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
  },

  textoBotaoCaixa: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  inputSalario: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  }


});
