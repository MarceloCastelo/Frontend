import { useFonts } from "expo-font";
import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";

//Components
import InputComponent from "../../assets/components/InputComponent";
import UploadComponent from "../../assets/components/UploadImageComponent";
import ButtonBlue from "../../assets/components/ButtonBlueComponent";
import ButtonWhite from "../../assets/components/ButtonWhiteComponent";
import InformacoesPerfil from "../../assets/components/InformacoesPerfil";
// Icons
import { BsPersonCircle, BsFunnel, BsFileEarmarkPdf } from "react-icons/bs";
import { FaRegEye, FaPlusCircle, FaCreditCard } from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";
import { Link } from "expo-router";

export default function Home() {
  const [loaded] = useFonts({
    MontserratMedium: require("../../assets/fonts/Montserrat-Medium.ttf"),
    MontserratBold: require("../../assets/fonts/Montserrat-Bold.ttf"),
    MontserratThin: require("../../assets/fonts/Montserrat-Thin.ttf"),
    MontserratLight: require("../../assets/fonts/Montserrat-Light.ttf"),
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Perfil</Text>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>suas informações de perfil</Text>
      </View>

      <View style={{ marginLeft: 12, marginBottom: 24 }}>
        <InformacoesPerfil
          titulo="Informações pessoais"
          informacoes="Adicione aqui as suas informações"
        />
      </View>

      <View style={{ margin: 8 }}>
        <InputComponent label="Nome" input="Marcelo Castelo" />
        <InputComponent label="Email" input="marcelo.castelo@souunit.com.br" />
        <InputComponent
          label="Telefone / Celular"
          input="+55 (00) 00000-0000"
        />
      </View>
      <View style={{ flexDirection: "row", width: "47%", margin: 8 }}>
        <InputComponent label="Data de nascimento" input="" />
        <InputComponent label="RG" input="" />
      </View>

      <View style={{ flexDirection: "row", width: "47%", margin: 8 }}>
        <InputComponent label="Orgão Emissor" input="" />
        <InputComponent label="CPF" input="" />
      </View>

      <View style={{ flexDirection: "row", width: "47%", margin: 8 }}>
        <InputComponent label="Estado civil" input="" />
        <InputComponent label="Profissão" input="" />
      </View>

      <View style={{ flexDirection: "row", width: "47%", margin: 8 }}>
        <InputComponent label="CEP" input="" />
        <InputComponent label="Endereço" input="" />
      </View>

      <View style={{ alignItems: "center" }}>
        <View style={{ margin: 12, alignItems: "center", padding: 8 }}>
          <UploadComponent />
        </View>
        <View style={{ margin: 12, alignItems: "center", padding: 8 }}>
          <Link href="/alterarSenha/">
            <ButtonWhite nomeBotao="Alterar Senha" />
          </Link>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            margin: 12,
            padding: 8,
          }}
        >
          <Link href="/home/">
            <ButtonWhite nomeBotao="Cancelar" />
          </Link>
          <Link href="/home/">
            <ButtonBlue nomeBotao="Salvar Alterações" />
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#0C2C44",
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 8,
  },
  headerText: {
    fontSize: 32,
    color: "white",
    fontFamily: "MontserratMedium",
  },
  sectionHeader: {
    borderBottomColor: "#D0D5DD",
    borderBottomWidth: 1,
    margin: 12,
  },
  sectionHeaderText: {
    fontSize: 20,
    marginBottom: 8,
    color: "#0C2C44",
    fontFamily: "MontserratMedium",
  },
  subSection: {
    margin: 12,
  },
  subSectionTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#344054",
    fontFamily: "MontserratMedium",
  },
  subSectionDescription: {
    fontSize: 14,
    color: "#475467",
    fontFamily: "MontserratMedium",
  },
});
