import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";
import { Link } from "expo-router";
import Checkbox from "expo-checkbox";
import { FcGoogle } from "react-icons/fc";
import { useFonts } from "expo-font";

//Component
import InputComponent from "../../assets/components/InputComponent";

export default function Login() {
  const [loaded] = useFonts({
    MontserratMedium: require("../../assets/fonts/Montserrat-Medium.ttf"),
    MontserratBold: require("../../assets/fonts/Montserrat-Bold.ttf"),
    MontserratThin: require("../../assets/fonts/Montserrat-Thin.ttf"),
    MontserratLight: require("../../assets/fonts/Montserrat-Light.ttf"),
  });

  const [isChecked, setChecked] = useState(false);



  return (
    <View>
      <Image
        style={styles.logoSize}
        source={require("./../../assets/images/logoColorida.png")}
      />

      <Text style={styles.title}>Log in</Text>
      <Text
        style={{
          marginLeft: "5%",
          marginTop: "2%",
          color: "gray",
          fontSize: 16,
          lineHeight: 24,
          fontWeight: "400",
          fontFamily: "MontserratMedium",
        }}
      >
        Bem vindo(a) De volta!
      </Text>
      
      <InputComponent
        label="Email"
        input={"Digite aqui o seu email"}
        onChangeText={(text) => setEmail(text)} 

      />
      
      <InputComponent
        label="Senha"
        input={"********"}
        onChangeText={(text) => setPassword(text)} 
      />

      <View style={styles.checkbox}>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#151D2D" : undefined}
        />
        <Text
          style={{
            paddingLeft: "2%",
            color: "gray",
            fontSize: 14,
            fontWeight: "400",
            fontFamily: "MontserratMedium",
          }}
        >
          Lembrar de mim
        </Text>
        <Link href="/esqueciSenha/" asChild>
          <Text
            style={{
              color: "#0B3154",
              paddingLeft: "30%",
              textDecorationLine: "underline",
              fontSize: 14,
              fontWeight: "400",
              fontFamily: "MontserratMedium",
            }}
          >
            Esqueci a senha
          </Text>
        </Link>
      </View>

      <View style={styles.botaoDentro}>
        <Link href="/home/" asChild>
        <Pressable>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                lineHeight: 24,
                fontWeight: "400",
                fontFamily: "MontserratMedium",
              }}
            >
              Entrar
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
                lineHeight: 24,
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
          lineHeight: 24,
          fontWeight: "400",
          fontFamily: "MontserratMedium",
        }}
      >
        Não tem uma conta?{" "}
        <Link
          style={{ fontWeight: "bold", color: "#0B3154" }}
          href="/registrar/"
        >
          Cadastre-se
        </Link>{" "}
      </Text>
    </View>
  );
}

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
    paddingLeft: "5%",
    fontSize: 36,
    lineHeight: 24,
    fontWeight: "400",
    fontFamily: "MontserratBold",
    marginTop: "20%",
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

  checkbox: {
    marginLeft: "5%",
    flexDirection: "row",
  },
});
