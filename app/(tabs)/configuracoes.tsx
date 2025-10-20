import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Switch,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { Link } from "expo-router";
import CustomSwitch from "../../components/CustomSwitch";
import { Background } from "@react-navigation/elements";
import CustomRadioGroup from "../../components/CustomRadioGroup";

export default function cadastro() {
  const [scrollAtivo, setScrollAtivo] = useState(true); // controla o scroll

  const [switchValuenotificacoes, setSwitchValuenotificacoes] = useState(false);
  const [switchValuelembretegastos, setSwitchValuelembretegastos] = useState(false);
  const [switchValueavisoorcamento, setSwitchValueavisoorcamento] = useState(false);
  const [switchValuerelatoriossemanal, setSwitchValuerelatoriossemanal] = useState(false);
  const [switchValuerelatoriosmensal, setSwitchValuerelatoriosmensal] = useState(false);


  const [selecionadotemaclaro, setSelecionadotemaclaro] = useState(false);
  const [selecionadotemaescuro, setSelecionadotemaescuro] = useState(false);
  const [selecionadoidiomapt, setSelecionadoidiomapt] = useState(false);
  const [selecionadoidiomaing, setSelecionadoidiomaing] = useState(false);
  const [selecionadoidiomaesp, setSelecionadoidiomaesp] = useState(false);
  const [selecionadomoedareal, setSelecionadomoedareal] = useState(false);
  const [selecionadomoedadolar, setSelecionadomoedadolar] = useState(false);
  const [selecionadomoedaeuro, setSelecionadomoedaeuro] = useState(false);


  const [mostrartema, setMostrartema] = useState(false);
  const [mostraridioma, setMostraridioma] = useState(false);
  const [mostrarmoeda, setMostrarmoeda] = useState(false);
  


  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.main}
        showsVerticalScrollIndicator={false}
        scrollEnabled={scrollAtivo}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>Configurações</Text>
        </View>

        {/* -------------------------------Notificações -------------------------------- */}

        <View style={styles.notificacoes}>
          <View style={styles.containertitulotexto}>
            <Text style={styles.titulotexto}>Notificações</Text>
          </View>
          <View style={styles.containeropcoesnotificacoes}>
            <View style={styles.opcoesnotificacoes}>
              <View>
                <Text style={styles.titulotextoopcao}>Notificações</Text>
                <Text style={styles.subtitulotextoopcao}>
                  Receba alertas e atualizações importantes
                </Text>
              </View>
              <View style={styles.switch}>
                <CustomSwitch
                  value={switchValuenotificacoes}
                  onValueChange={(val: boolean) => setSwitchValuenotificacoes(val)}
                />
              </View>
            </View>
            <View
              style={[
                styles.opcoesnotificacoes,
                { borderTopWidth: 1, borderTopColor: "#e6e5e5ff" },
              ]}
            >
              <View>
                <Text style={styles.titulotextoopcao}>Lembrete de gastos</Text>
                <Text style={styles.subtitulotextoopcao}>
                  Receber lembretes sobre gastos
                </Text>
              </View>
              <View style={styles.switch}>
                <CustomSwitch
                  value={switchValuelembretegastos}
                  onValueChange={(val: boolean) => setSwitchValuelembretegastos(val)}
                />
              </View>
            </View>
            <View
              style={[
                styles.opcoesnotificacoes,
                { borderTopWidth: 1, borderTopColor: "#e6e5e5ff" },
              ]}
            >
              <View>
                <Text style={styles.titulotextoopcao}>
                  Aviso de orçamento exedido
                </Text>
                <Text style={styles.subtitulotextoopcao}>
                  Alertas quando você ultrapassa o orçamento
                </Text>
              </View>
              <View style={styles.switch}>
                <CustomSwitch
                  value={switchValueavisoorcamento}
                  onValueChange={(val: boolean) => setSwitchValueavisoorcamento(val)}
                />
              </View>
            </View>
            <View
              style={[
                styles.opcoesnotificacoes,
                { borderTopWidth: 1, borderTopColor: "#e6e5e5ff" },
              ]}
            >
              <View>
                <Text style={styles.titulotextoopcao}>Relatorio semanais</Text>
                <Text style={styles.subtitulotextoopcao}>
                  resumo semanal dos seus gastos
                </Text>
              </View>
              <View style={styles.switch}>
                <CustomSwitch
                  value={switchValuerelatoriossemanal}
                  onValueChange={(val: boolean) => setSwitchValuerelatoriossemanal(val)}
                />
              </View>
            </View>
            <View
              style={[
                styles.opcoesnotificacoes,
                { borderTopWidth: 1, borderTopColor: "#e6e5e5ff" },
              ]}
            >
              <View>
                <Text style={styles.titulotextoopcao}>Relatorio mensal</Text>
                <Text style={styles.subtitulotextoopcao}>
                  resumo mensal dos seus gastos
                </Text>
              </View>
              <View style={styles.switch}>
                <CustomSwitch
                  value={switchValuerelatoriosmensal}
                  onValueChange={(val: boolean) => setSwitchValuerelatoriosmensal(val)}
                />
              </View>
            </View>
          </View>
        </View>

        {/* -------------------------------Aparência -------------------------------- */}

        <View style={styles.aparencia}>
          <View style={styles.containertitulotexto}>
            <Text style={styles.titulotexto}>Aparência</Text>
          </View>

          <View style={styles.containeropcoesaparencia}>
            <TouchableOpacity onPress={() => { setMostrartema(!mostrartema); setScrollAtivo(!scrollAtivo); }} style={styles.opcoesnotificacoes}>
              <View>
                <Text style={styles.titulotextoopcao}>Tema</Text>
                <Text style={styles.subtitulotextoopcao}>
                  Escolha entre tema claro ou escuro
                </Text>
              </View>
              <View>
                <Text>Claro {" >"}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* -------------------------------Geral -------------------------------- */}

        <View style={styles.geral}>
          <View style={styles.containertitulotexto}>
            <Text style={styles.titulotexto}>Geral</Text>
          </View>

          <View style={styles.containeropcoesgeral}>
            <TouchableOpacity onPress={() => { setMostraridioma(!mostraridioma); setScrollAtivo(!scrollAtivo); }} style={styles.opcoesnotificacoes}>
              <View>
                <Text style={styles.titulotextoopcao}>Idioma</Text>
                <Text style={styles.subtitulotextoopcao}>
                  Selecione o idioma da aplicação
                </Text>
              </View>
              <View>
                <Text>Português {" >"}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setMostrarmoeda(!mostrarmoeda); setScrollAtivo(!scrollAtivo); }}
              style={[
                styles.opcoesnotificacoes,
                { borderTopWidth: 1, borderTopColor: "#e6e5e5ff" },
              ]}
            >
              <View>
                <Text style={styles.titulotextoopcao}>Moeda</Text>
                <Text style={styles.subtitulotextoopcao}>
                  Selecione a moeda da aplicação
                </Text>
              </View>
              <View>
                <Text>R$ {" >"}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={[styles.containeropcao, { display: mostrartema ? 'flex' : 'none' }]}>
        <View style={styles.containerbarrinha}>
          <View style={styles.barrinha}></View>
        </View>
        <View
          style={[
            styles.containertitulotexto,
            { height: 40, justifyContent: "flex-end", paddingLeft: 10 },
          ]}
        >
          <Text style={styles.titulotexto}>Selecione o tema</Text>
        </View>

        <View style={styles.containeropcoestema}>
          <TouchableOpacity style={styles.opcaoTema} onPress={() => setSelecionadotemaclaro(!selecionadotemaclaro)}>
            <Text>Claro</Text>
            <CustomRadioGroup
              selected={selecionadotemaclaro}
              onPress={() => setSelecionadotemaclaro(!selecionadotemaclaro)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.opcaoTema} onPress={() => setSelecionadotemaescuro(!selecionadotemaescuro)}>
            <Text>Escuro</Text>
            <CustomRadioGroup
              selected={selecionadotemaescuro}
              onPress={() => setSelecionadotemaescuro(!selecionadotemaescuro)}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.containercancelarconfirmar}>
          <TouchableOpacity style={styles.buttoncancelar} onPress={() => { setMostrartema(!mostrartema); setScrollAtivo(!scrollAtivo); }}>
            <Text>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonconfirmar}>
            <Text style={{ color: "#ffffff" }}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.containeropcao, { display: mostrarmoeda ? 'flex' : 'none' }]}>
        <View style={styles.containerbarrinha}>
          <View style={styles.barrinha}></View>
        </View>

        <View
          style={[
            styles.containertitulotexto,
            { height: 40, justifyContent: "flex-end", paddingLeft: 10 },
          ]}
        >
          <Text style={styles.titulotexto}>Selecione uma moeda</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={true}>
          <View style={styles.containeropcoestema}>
            <TouchableOpacity style={styles.opcaoTema} onPress={() => setSelecionadomoedareal(!selecionadomoedareal)}>
              <Text>Real (R$)</Text>
              <CustomRadioGroup
                selected={selecionadomoedareal}
                onPress={() => setSelecionadomoedareal(!selecionadomoedareal)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.opcaoTema} onPress={() => setSelecionadomoedadolar(!selecionadomoedadolar)}>
              <Text>Dólar ($)</Text>
              <CustomRadioGroup
                selected={selecionadomoedadolar}
                onPress={() => setSelecionadomoedadolar(!selecionadomoedadolar)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.opcaoTema} onPress={() => setSelecionadomoedaeuro(!selecionadomoedaeuro)}>
              <Text>Euro (€)</Text>
              <CustomRadioGroup
                selected={selecionadomoedaeuro}
                onPress={() => setSelecionadomoedaeuro(!selecionadomoedaeuro)}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>

          <View style={styles.containercancelarconfirmar}>
          <TouchableOpacity style={styles.buttoncancelar} onPress={() => { setMostrarmoeda(!mostrarmoeda); setScrollAtivo(!scrollAtivo); }}>
            <Text>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonconfirmar}>
            <Text style={{ color: "#ffffff" }}>Confirmar</Text>
          </TouchableOpacity>
        </View>

      </View>
      <View style={[styles.containeropcao, { display: mostraridioma ? 'flex' : 'none' }]}>
        <View style={styles.containerbarrinha}>
          <View style={styles.barrinha}></View>
        </View>

        <View
          style={[
            styles.containertitulotexto,
            { height: 40, justifyContent: "flex-end", paddingLeft: 10 },
          ]}
        >
          <Text style={styles.titulotexto}>Selecione um idioma</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={true}>
          <View style={styles.containeropcoestema}>
            <TouchableOpacity style={styles.opcaoTema} onPress={() => setSelecionadoidiomapt(!selecionadoidiomapt)}>
              <Text>Português</Text>
              <CustomRadioGroup
                selected={selecionadoidiomapt}
                onPress={() => setSelecionadoidiomapt(!selecionadoidiomapt)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.opcaoTema} onPress={() => setSelecionadoidiomaing(!selecionadoidiomaing)}>
              <Text>Inglês</Text>
              <CustomRadioGroup
                selected={selecionadoidiomaing}
                onPress={() => setSelecionadoidiomaing(!selecionadoidiomaing)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.opcaoTema} onPress={() => setSelecionadoidiomaesp(!selecionadoidiomaesp)}>
              <Text>Español</Text>
              <CustomRadioGroup
                selected={selecionadoidiomaesp}
                onPress={() => setSelecionadoidiomaesp(!selecionadoidiomaesp)}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>

          <View style={styles.containercancelarconfirmar}>
          <TouchableOpacity style={styles.buttoncancelar} onPress={() => { setMostraridioma(!mostraridioma); setScrollAtivo(!scrollAtivo); }}>
            <Text>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonconfirmar}>
            <Text style={{ color: "#ffffff" }}>Confirmar</Text>
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
  },
  notificacoes: {
    width: "100%",
    padding: 10,
  },
  aparencia: {
    width: "100%",
    padding: 10,
  },
  geral: {
    width: "100%",
    padding: 10,
  },
  containertitulotexto: {
    width: "100%",
    height: 50,
    justifyContent: "center",
  },
  titulotexto: {
    fontSize: 20,
    color: "#656464ff",
  },
  containeropcoesnotificacoes: {
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  containeropcoesaparencia: {
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  containeropcoesgeral: {
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  opcoesnotificacoes: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titulotextoopcao: {
    fontSize: 16,
  },
  subtitulotextoopcao: {
    fontSize: 12,
    color: "#656464ff",
  },
  switch: {
    paddingRight: 10,
  },
  // containeropcao: {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: [{ translateX: -100 }, { translateY: -50 }], // centraliza o quadrado
  //   width: 200,
  //   height: 100,
  //   backgroundColor: "rgba(0, 0, 0, 0.8)",
  //   borderRadius: 10,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  containeropcao: {
    display: "flex", // select opção tema
    width: "100%",
    height: 240,
    backgroundColor: "#ffffffff",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  containerbarrinha: {
    width: "100%",
    height: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 10,
  },
  barrinha: {
    width: 35,
    height: 2,
    backgroundColor: "#c4c4c4ff",
    borderRadius: 5,
  },
  containeropcoestema: {
    width: "100%",
    padding: 10,
    gap: 10,
  },
  opcaoTema: {
    width: "100%",
    height: 50,
    backgroundColor: "#ffffffff",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: "#e6e5e5ff",
  },
  containercancelarconfirmar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#ffffffff",
    padding: 10,
    gap: 10,
  },
  buttoncancelar: {
    backgroundColor: "#e4e6eb",
    width: "45%",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonconfirmar: {
    backgroundColor: "#1380ed",
    width: "45%",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
