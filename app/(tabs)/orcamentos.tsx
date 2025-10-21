import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Link, router } from "expo-router";

const imgcomidas = require("../../assets/images/cookie.png");
const imgcompras = require("../../assets/images/shopping.png");
const imgtransporte = require("../../assets/images/directions_car.png");
const imgentreterimento = require("../../assets/images/movie.png");
const imgsaude = require("../../assets/images/ecg_hear.png");
const imgoutros = require("../../assets/images/ecg_hear.png");
const imgoption = require("../../assets/images/more_vert.png");

export default function cadastro() {
  function entrar_pagina_dinamica(value: string) {
    router.push(`/(outros)/${value}` as any);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Orçamentos</Text>
        <TouchableOpacity style={styles.optionButton}>
          <Image source={imgoption} />
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <View style={styles.containertitulotexto}>
          <Text style={styles.titulotexto}>Visão Geral</Text>
        </View>

        <View style={styles.containercardsorçamentos}>
          <TouchableOpacity
            style={styles.cardsorçamentos}
            onPress={() => entrar_pagina_dinamica("alimentacao")}
          >
            <View style={styles.esquerda}>
              <View style={styles.circulofoto}>
                <Image source={imgcomidas} style={{ width: 30, height: 30 }} />
              </View>
            </View>
            <View style={styles.meio}>
              <Text style={styles.titulotextocard}>Alimentação</Text>
              <Text style={styles.subtitulotextocard}>R$ 0,00 Restantes</Text>
            </View>
            <View style={styles.direita}>
              <View style={styles.containerbarraorçamento}>
                <View style={styles.barraorçamentovazia}>
                  <View style={styles.barraorçamento}></View>
                </View>
                <Text>100%</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardsorçamentos}
            onPress={() => entrar_pagina_dinamica("compras")}
          >
            <View style={styles.esquerda}>
              <View style={styles.circulofoto}>
                <Image source={imgcompras} style={{ width: 25, height: 30 }} />
              </View>
            </View>
            <View style={styles.meio}>
              <Text style={styles.titulotextocard}>Compras</Text>
              <Text style={styles.subtitulotextocard}>R$ 0,00 Restantes</Text>
            </View>
            <View style={styles.direita}>
              <View style={styles.containerbarraorçamento}>
                <View style={styles.barraorçamentovazia}>
                  <View style={styles.barraorçamento}></View>
                </View>
                <Text>100%</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardsorçamentos}
            onPress={() => entrar_pagina_dinamica("transporte")}
          >
            <View style={styles.esquerda}>
              <View style={styles.circulofoto}>
                <Image
                  source={imgtransporte}
                  style={{ width: 30, height: 25 }}
                />
              </View>
            </View>
            <View style={styles.meio}>
              <Text style={styles.titulotextocard}>Transporte</Text>
              <Text style={styles.subtitulotextocard}>R$ 0,00 Restantes</Text>
            </View>
            <View style={styles.direita}>
              <View style={styles.containerbarraorçamento}>
                <View style={styles.barraorçamentovazia}>
                  <View style={styles.barraorçamento}></View>
                </View>
                <Text>100%</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardsorçamentos}
            onPress={() => entrar_pagina_dinamica("entreterimento")}
          >
            <View style={styles.esquerda}>
              <View style={styles.circulofoto}>
                <Image
                  source={imgentreterimento}
                  style={{ width: 30, height: 25 }}
                />
              </View>
            </View>
            <View style={styles.meio}>
              <Text style={styles.titulotextocard}>Entreterimento</Text>
              <Text style={styles.subtitulotextocard}>R$ 0,00 Restantes</Text>
            </View>
            <View style={styles.direita}>
              <View style={styles.containerbarraorçamento}>
                <View style={styles.barraorçamentovazia}>
                  <View style={styles.barraorçamento}></View>
                </View>
                <Text>100%</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardsorçamentos}
            onPress={() => entrar_pagina_dinamica("saude")}
          >
            <View style={styles.esquerda}>
              <View style={styles.circulofoto}>
                <Image source={imgsaude} style={{ width: 30, height: 25 }} />
              </View>
            </View>
            <View style={styles.meio}>
              <Text style={styles.titulotextocard}>Saúde</Text>
              <Text style={styles.subtitulotextocard}>R$ 0,00 Restantes</Text>
            </View>
            <View style={styles.direita}>
              <View style={styles.containerbarraorçamento}>
                <View style={styles.barraorçamentovazia}>
                  <View style={styles.barraorçamento}></View>
                </View>

                <Text>100%</Text>
              </View>
            </View>
          </TouchableOpacity>
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
    gap: 10,
  },
  containertitulotexto: {
    width: "100%",
    height: 80,
    justifyContent: "flex-end",
    paddingLeft: 15,
    paddingRight: 10,
  },
  titulotexto: {
    fontSize: 20,
    fontWeight: "bold",
  },
  optionButton: {
    justifyContent: "center",
    alignItems: "flex-end",
    height: 70,
    position: "absolute",
    right: 15,
    top: 18,
  },
  containercardsorçamentos: {
    width: "100%",
    paddingLeft: 15,
    paddingRight: 10,
    paddingTop: 20,
    justifyContent: "center",
    gap: 10,
  },
  cardsorçamentos: {
    width: "100%",
    height: 80,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    flexDirection: "row",
  },
  esquerda: {
    width: "20%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  circulofoto: {
    width: 50,
    height: 50,
    backgroundColor: "#e6f1fc",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    objectFit: "cover",
  },
  meio: {
    width: "45%",
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 10,
  },
  titulotextocard: {
    fontSize: 18,
    fontWeight: "bold",
  },

  subtitulotextocard: {
    fontSize: 14,
  },

  direita: {
    width: "35%",
    height: "100%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  containerbarraorçamento: {
    width: "100%",
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
    width: "15%",
    height: 9,
    backgroundColor: "#4a90e2ff",
    borderRadius: 5,
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 1,
  },
});
