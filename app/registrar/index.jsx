import React from "react";
import {
  ImageBackground,
  Button,
  StyleSheet,
  Image,
  View,
  Text,
  Pressable,
} from "react-native";
import { Link } from "expo-router";
import { TextInput } from "react-native-gesture-handler";
import { FcGoogle } from "react-icons/fc";
import { useFonts } from "expo-font";

import InputComponent from "../../assets/components/InputComponent";

const login = () => {
  const [loaded] = useFonts({
    MontserratMedium: require("../../assets/fonts/Montserrat-Medium.ttf"),
    MontserratBold: require("../../assets/fonts/Montserrat-Bold.ttf"),
    MontserratThin: require("../../assets/fonts/Montserrat-Thin.ttf"),
    MontserratLight: require("../../assets/fonts/Montserrat-Light.ttf"),
  });
  return (
    <View>
      <Image
        style={styles.logoSize}
        source={require("./../../assets/images/logoColorida.png")}
      />

      <Text style={styles.title}>Cadastre-se</Text>

      <InputComponent label="Nome" input="João da Silva" />

      <InputComponent label="Email" input="joao@dasilva.com" />

      <View style={styles.botaoDentro}>
        <Link href="/redefinaSenha/" asChild>
          <Pressable>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "400",
                fontFamily: "MontserratMedium",
              }}
            >
              Continuar
            </Text>
          </Pressable>
        </Link>
      </View>

      <View
        style={{
          borderColor: "#D0D5DD",
          borderWidth: 1,
          marginTop: "5%",
          width: "92.5%",
          alignSelf: "center",
          alignItems: "center",
          borderRadius: 5,
        }}
      >
        <Link href="/home/" asChild>
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
              padding: 12,
            }}
          >
            <FcGoogle fontSize={30} />
            <Text
              style={{
                color: "black",
                fontSize: 20,
                fontWeight: "400",
                fontFamily: "MontserratMedium",
              }}
            >
              Entrar com o Google
            </Text>
          </Pressable>
        </Link>
      </View>

      <Text
        style={{
          marginTop: "5%",
          textAlign: "center",
          color: "black",
          fontSize: 14,
          fontWeight: "400",
          fontFamily: "MontserratMedium",
        }}
      >
        Já possui uma conta?{" "}
        <Link style={{ fontWeight: "bold", color: "#0B3154" }} href="/login/">
          Faça login!
        </Link>{" "}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },

  logoSize: {
    width: 252,
    height: 94,
    alignSelf: "center",
    shadowColor: "black",
    marginTop: "20%",
    opacity: 1,
  },

  title: {
    flex: 1,
    margin: 30,
    alignSelf: "center",
    color: "black",
    fontSize: 36,
    fontWeight: "400",
    fontFamily: "MontserratBold",
  },

  divInput: {
    padding: "2%",
  },

  botaoDentro: {
    marginTop: "5%",
    width: "92.5%",
    padding: 15,
    alignSelf: "center",
    backgroundColor: "#133D63",
    alignItems: "center",
    borderRadius: 5,
  },
});
export default login;
