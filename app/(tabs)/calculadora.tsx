import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Link } from "expo-router";
import { useState } from "react";


export default function cadastro() {
const [displayValue, setDisplayValue] = useState("0");

function digitarvalor(valor: string) {
  setDisplayValue(valor);
  let newValue = displayValue;

  // Limpa tudo
  if (valor === "C") {
    setDisplayValue("0");
    return;
  }

  // Apaga último caractere
  if (valor === "Del") {
    if (displayValue.length > 1) {
      setDisplayValue(displayValue.slice(0, -1));
    } else {
      setDisplayValue("0");
    }
    return;
  }

  // Troca sinal
  if (valor === "+/-") {
    if (displayValue !== "0") {
      if (displayValue.startsWith("-")) {
        setDisplayValue(displayValue.slice(1));
      } else {
        setDisplayValue("-" + displayValue);
      }
    }
    return;
  }

  // Adiciona porcentagem
  if (valor === "%") {
    try {
      const result = String(parseFloat(displayValue) / 100);
      setDisplayValue(result);
    } catch {
      setDisplayValue("Erro");
    }
    return;
  }

  // Calcula resultado
  if (valor === "=") {
    try {
      // Substitui x por * para multiplicação
      let expression = displayValue.replace(/x/g, "*");
      // Avalia expressão
      // eslint-disable-next-line no-eval
      const result = eval(expression);
      setDisplayValue(String(result));
    } catch {
      setDisplayValue("Erro");
    }
    return;
  }

  // Adiciona operador ou número
  if ("0123456789".includes(valor)) {
    if (displayValue === "0") {
      setDisplayValue(valor);
    } else {
      setDisplayValue(displayValue + valor);
    }
    return;
  }

  if (["+", "-", "x", "/"].includes(valor)) {
    // Evita operadores duplicados
    if (["+", "-", "x", "/"].includes(displayValue.slice(-1))) return;
    setDisplayValue(displayValue + valor);
    return;
  }

  if (valor === ".") {
    // Evita múltiplos pontos no mesmo número
    const parts = displayValue.split(/[\+\-x\/]/);
    if (parts[parts.length - 1].includes(".")) return;
    setDisplayValue(displayValue + ".");
    return;
  }
}
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Calculadora</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.displaycalculadora}>
            <TextInput style={styles.inputcalculadora}  value={displayValue} onChangeText={digitarvalor}  editable={false}/>
        </View>
        <View style={styles.tecladocalculadora}>
            <View style={styles.linhacalc}>
                <TouchableOpacity onPress={() => {digitarvalor("C")}} style={styles.botaocinzaescurocalcc}><Text style={styles.textobotaopretocalc}>C</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {digitarvalor("+/-")}} style={styles.botaocinzaescurocalcc}><Text style={styles.textobotaopretocalc}>+/-</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {digitarvalor("%")}} style={styles.botaocinzaescurocalcc}><Text style={styles.textobotaopretocalc}>%</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {digitarvalor("Del")}} style={styles.botaoazulescurocalcc}><Text style={styles.textobotaobrancocalc}>Del</Text></TouchableOpacity>
            </View>
            <View style={styles.linhacalc}>
                <TouchableOpacity onPress={() => {digitarvalor("7")}} style={styles.botaocinzaclarocalcc}><Text style={styles.textobotaopretocalc}>7</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {digitarvalor("8")}} style={styles.botaocinzaclarocalcc}><Text style={styles.textobotaopretocalc}>8</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {digitarvalor("9")}} style={styles.botaocinzaclarocalcc}><Text style={styles.textobotaopretocalc}>9</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {digitarvalor("x")}} style={styles.botaoazulescurocalcc}><Text style={styles.textobotaobrancocalc}>x</Text></TouchableOpacity>
            </View>
            <View style={styles.linhacalc}>
                <TouchableOpacity onPress={() => {digitarvalor("4")}} style={styles.botaocinzaclarocalcc}><Text style={styles.textobotaopretocalc}>4</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {digitarvalor("5")}} style={styles.botaocinzaclarocalcc}><Text style={styles.textobotaopretocalc}>5</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {digitarvalor("6")}} style={styles.botaocinzaclarocalcc}><Text style={styles.textobotaopretocalc}>6</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {digitarvalor("-")}} style={styles.botaoazulescurocalcc}><Text style={styles.textobotaobrancocalc}>-</Text></TouchableOpacity>
            </View>
            <View style={styles.linhacalc}>
                <TouchableOpacity onPress={() => {digitarvalor("1")}} style={styles.botaocinzaclarocalcc}><Text style={styles.textobotaopretocalc}>1</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {digitarvalor("2")}} style={styles.botaocinzaclarocalcc}><Text style={styles.textobotaopretocalc}>2</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {digitarvalor("3")}} style={styles.botaocinzaclarocalcc}><Text style={styles.textobotaopretocalc}>3</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {digitarvalor("+")}} style={styles.botaoazulescurocalcc}><Text style={styles.textobotaobrancocalc}>+</Text></TouchableOpacity>
            </View>
            <View style={styles.linhacalc}>
                <TouchableOpacity onPress={() => {digitarvalor("0")}} style={styles.botaocinzaclarocalcczero}><Text style={styles.textobotaopretocalc}>0</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {digitarvalor(".")}} style={styles.botaocinzaclarocalcc}><Text style={styles.textobotaopretocalc}>.</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {digitarvalor("=")}} style={styles.botaoazulescurocalcc}><Text style={styles.textobotaobrancocalc}>=</Text></TouchableOpacity>

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
    gap: 10,
    padding: 10,
  },
    displaycalculadora: {
    width: '100%',
    height: 200,
    backgroundColor: '#e6e5e5ff',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
  },
    inputcalculadora: {
    width: '100%',
    height: '50%',
    backgroundColor: '#e6e5e5ff',
    padding: 10,
    fontSize: 40,
    textAlign: 'right',
  },
    tecladocalculadora: {
    width: '100%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    gap: 10,
  },
    linhacalc: {
    width: '100%',
    height: '18%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  botaocinzaclarocalcczero:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 140,
    height: 70,
    backgroundColor: '#f2f3f5',
    borderRadius: 50,
  },

    botaocinzaclarocalcc:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#f2f3f5',
    borderRadius: 50,
  },
  botaocinzaescurocalcc:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#cfd0d0ff',
    borderRadius: 50,
  },
    botaoazulescurocalcc:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#1380ed',
    borderRadius: 50,
  },
  textobotaopretocalc:{
    color: '#000000',
    fontSize: 24,
  },
    textobotaobrancocalc:{
    color: '#ffffff',
    fontSize: 24,
  },

});
