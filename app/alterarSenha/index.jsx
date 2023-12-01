import { useFonts } from "expo-font";
import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";

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
        <Text style={styles.headerText}>Alterar senha</Text>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Altere sua senha aqui</Text>
      </View>

      <View style={styles.containerInput}>
        <Text style={styles.label}>Senha antiga</Text>
        <TextInput style={styles.input} placeholder="Insira sua senha antiga" />
      </View>

      <View style={styles.containerInput}>
        <Text style={styles.label}>Senha nova</Text>
        <TextInput style={styles.input} placeholder="**********" />
        <Text style={styles.label}>Deve conter pelo menos 8 caracteres</Text>
      </View>

      <View style={styles.containerInput}>
        <Text style={styles.label}>Confirmar senha</Text>
        <TextInput style={styles.input} placeholder="Confirme a senha" />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          gap: 24,
          marginBottom: 20,
        }}
      >
        <View>
          <Link href="/home/" asChild>
            <Pressable
              style={{
                marginTop: 30,
                alignItems: "center",
                borderRadius: 8,
                borderWidth: 1,
                width: 180,
                borderColor: "#D0D5DD",
              }}
            >
              <Text
                style={{
                  padding: 10,
                  color: "black",
                  fontSize: 18,
                  lineHeight: 24,
                  fontFamily: "MontserratMedium",
                }}
              >
                Cancelar
              </Text>
            </Pressable>
          </Link>
        </View>
        <View>
          <Link href="/home/" asChild>
            <Pressable
              style={{
                marginTop: 30,
                alignItems: "center",
                borderRadius: 8,
                borderWidth: 1,
                width: "100%",
                backgroundColor: "#133D63",
              }}
            >
              <Text
                style={{
                  padding: 10,
                  color: "white",
                  fontSize: 18,
                  lineHeight: 24,
                  fontFamily: "MontserratMedium",
                }}
              >
                Salvar alterações
              </Text>
            </Pressable>
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

  containerInput: {
    fontFamily: "MontserratMedium",
    marginBottom: 20,
    margin: 12,
  },

  label: {
    color: "#344054",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "MontserratMedium",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#D0D5DD",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    fontFamily: "MontserratMedium",
  },
});
