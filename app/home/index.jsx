import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import PieChart from "react-native-pie-chart";
import { useFonts } from "expo-font";

// Icons
import { BsPersonCircle, BsFunnel, BsFileEarmarkPdf } from "react-icons/bs";
import { FaRegEye, FaPlusCircle, FaCreditCard } from "react-icons/fa";

// Componentes
import ResultadoGrafico from "../../assets/components/ResultadoGrafico";
import TableComponent from "../../assets/components/TableComponent";
import EntradaSaidaComponent from "../../assets/components/EntradaSaida";
import MinhasContas from "../../assets/components/MinhasContas";
import MeusCartoes from "../../assets/components/MeusCartoes";

export default function Home() {
  const resumoData = [
    "Entrada",
    "Investimento",
    "Custos Fixos",
    "Custos Variáveis",
    "Saldo",
  ];
  const idealData = {
    title: "Ideal",
    values: ["-", "20%", "30%", "20%", "30%"],
  };
  const realData = {
    title: "Real",
    values: ["-", "-", "-", "-", "-"],
  };
  const gastoData = {
    title: "Gasto",
    values: ["R$ 0,00", "R$ 0,00", "R$ 0,00", "R$ 0,00", "R$ 0,00"],
  };

  const widthAndHeight = 250;
  const series = [50, 30, 20];
  const sliceColor = ["#005452", "#3B8C6E", "#89D99D"];

  const [loaded] = useFonts({
    MontserratMedium: require("./../../assets/fonts/Montserrat-Medium.ttf"),
    MontserratBold: require("./../../assets/fonts/Montserrat-Bold.ttf"),
    MontserratThin: require("./../../assets/fonts/Montserrat-Thin.ttf"),
    MontserratLight: require("./../../assets/fonts/Montserrat-Light.ttf"),
  });

  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <BsPersonCircle color="white" fontSize={28} opacity={0} />
        <Text style={styles.headerText}>Minha vida</Text>
        <Link href="/perfil/" asChild>
          <Pressable>
            <BsPersonCircle color="white" fontSize={40}  />
          </Pressable>
        </Link>
      </View>

      {/* Navigation */}
      <View style={styles.navbar}>
        {/* Nav Button - Mês Atual */}
        <View style={styles.navButton}>
          <BsFunnel color="white" fontSize={28} />
          <Text style={styles.navButtonText}>Mês Atual</Text>
        </View>

        {/* Nav Button - Gerar Relatório */}
        <View style={styles.navButton}>
          <BsFileEarmarkPdf color="white" fontSize={28} />
          <Text style={styles.navButtonText}>Gerar Relatório</Text>
        </View>
      </View>

      {/* Gráfico */}
      <View>
        <PieChart
          style={styles.grafico}
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.5}
        />
      </View>

      {/* Resultado do gráfico */}
      <ResultadoGrafico />

      {/* Tabela */}
      <TableComponent
        resumo={resumoData}
        ideal={idealData}
        real={realData}
        gasto={gastoData}
      />

      {/* Entrada e saída */}
      <View style={styles.entradaSaida}>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontFamily: "MontserratBold",
            marginTop: 15,
          }}
        >
          Entradas x Saídas
        </Text>
        <EntradaSaidaComponent
          entrada="R$ 500.00"
          saida="R$ 300.00"
          saldo="R$ 200.00"
        />
      </View>

      {/* Meus cartões */}
      <View style={styles.entradaSaida}>
        <View
          style={{
            margin: 15,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}
        >
          <FaRegEye color={"white"} fontSize={25} opacity={0} />
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontFamily: "MontserratBold",
            }}
          >
            Cartões de Crédito
          </Text>
          <FaPlusCircle color={"white"} fontSize={25} />
        </View>

        <MeusCartoes
          nomeCartao="Conta A"
          limiteDisponivel="200"
          faturaAtual="300"
        />
        <MeusCartoes
          nomeCartao="Conta B"
          limiteDisponivel="1000"
          faturaAtual="2000"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#0C2C44",
    padding: 14,
    paddingTop: 50,
  },
  headerText: {
    color: "white",
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "MontserratMedium",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1C5C5C",
    padding: 12,
  },
  navButton: {
    alignItems: "center",
    flexDirection: "row",
    gap: 18,
  },
  navButtonText: {
    color: "white",
    fontSize: 20,
    fontFamily: "MontserratMedium",
  },

  grafico: {
    flex: 1,
    alignSelf: "center",
    margin: 25,
  },

  entradaSaida: {
    backgroundColor: "#0C2C44",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 8,
    width: "95%",
    marginVertical: 15,
  },
});
