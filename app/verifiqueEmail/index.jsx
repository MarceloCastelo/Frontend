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
import { useFonts } from "expo-font";

const login = () => {
  const [loaded] = useFonts({
    MontserratMedium: require("./../../assets/fonts/Montserrat-Medium.ttf"),
    MontserratBold: require("./../../assets/fonts/Montserrat-Bold.ttf"),
    MontserratThin: require("./../../assets/fonts/Montserrat-Thin.ttf"),
    MontserratLight: require("./../../assets/fonts/Montserrat-Light.ttf"),
  });

  return (
    <View>
      <Image
        style={styles.logoSize}
        source={require("./../../assets/images/logoColorida.png")}
      />

      <Text style={styles.title}>Verifique seu email</Text>
      <Text
        style={{
          margin: 12,
          textAlign: "center",
          width: "80%",
          alignSelf: "center",
          color: "gray",
          fontSize: 16,
          fontFamily: "MontserratMedium",
        }}
      >
        Enviamos um link de redefinição de senha para o email olivia@exemplo.com
      </Text>

      <Text
        style={{
          marginTop: "5%",
          textAlign: "center",
          color: "black",
          fontSize: 16,
          fontFamily: "MontserratMedium",
        }}
      >
        Não recebeu o email?{" "}
        <Text
          style={{ fontWeight: "bold", color: "#133D63" }}
        >
          Clique aqui para reenviar
        </Text>{" "}
      </Text>

      <View>
        <Link href="/login/" asChild>
          <Pressable style={styles.voltar}>
            <Image source={require("./../../assets/images/arrow-left.png")} />
            <Text
              style={{
                paddingLeft: "2%",
                color: "black",
                fontSize: 18,
                fontFamily: "MontserratMedium",
              }}
            >
              Voltar para login
            </Text>
          </Pressable>
        </Link>
      </View>
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
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: "30%",
  },

  divInput: {
    padding: "2%",
  },

  botaoDentro: {
    marginTop: "5%",
    width: "92.5%",
    flex: 1,
    padding: "3%",
    alignSelf: "center",
    backgroundColor: "#151D2D",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },

  voltar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "5%",
  },
});
export default login;
