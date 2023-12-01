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

      <Text style={styles.title}>Escolha uma senha</Text>

      <InputComponent label="Senha" input="******" />

      <InputComponent label="Confirme sua senha" input="******" />

      <View style={styles.botaoDentro}>
        <Link href="/cadastroConcluido/" asChild>
          <Pressable>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "400",
                fontFamily: "MontserratMedium",
              }}
            >
              Concluir Cadastro
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
                fontWeight: "400",
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
    margin: 36,
    color: "black",
    fontSize: 30,
    fontWeight: "400",
    fontFamily: "MontserratBold",
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
