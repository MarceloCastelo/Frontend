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
import InputComponent from "../../assets/components/InputComponent";

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

      <Text style={styles.title}>Esqueceu a senha?</Text>
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
        Vamos enviar instruções para redefini-la!
      </Text>

      <InputComponent label="Digite seu email" input="******" />

      <View style={styles.botaoDentro}>
        <Link href="/verifiqueEmail/" asChild>
          <Pressable>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                lineHeight: 24,
                fontFamily: "MontserratMedium",
              }}
            >
              Enviar instruções
            </Text>
          </Pressable>
        </Link>
      </View>

      <View>
        <Link href="/login/" asChild>
          <Pressable style={styles.voltar}>
            <Image source={require("./../../assets/images/arrow-left.png")} />
            <Text
              style={{
                paddingLeft: "2%",
                color: "black",
                fontSize: 20,
                lineHeight: 24,
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
    backgroundColor: "#133D63",
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
