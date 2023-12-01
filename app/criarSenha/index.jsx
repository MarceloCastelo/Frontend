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

const login = () => (
  <View>
    <Image
      style={styles.logoSize}
      source={require("./../../assets/images/logoColorida.png")}
    />

    <Text style={styles.title}>Escolha uma senha</Text>

    <View style={styles.divInput}>
      <Text style={{ marginTop: "2%", fontSize: 15, fontWeight: "bold" }}>
        Senha*
      </Text>
      <TextInput style={styles.input} placeholder="********" />
    </View>

    <View style={styles.divInput}>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        Confirmar a senha*
      </Text>
      <TextInput style={styles.input} placeholder="Confirme a senha" />
    </View>

    <View style={styles.botaoDentro}>
      <Link href="/cadastroConcluido/" asChild>
        <Pressable>
          <Text style={{ color: "white" }}>Concluir cadastro</Text>
        </Pressable>
      </Link>
    </View>

    <Text style={{ marginTop: "5%", textAlign: "center", fontSize: 15 }}>
      Já possui uma conta?{" "}
      <Link style={{ fontWeight: "bold", color: "#151D2D" }} href="/login/">
        Faça o login
      </Link>{" "}
    </Text>
  </View>
);

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
    marginTop: "20%",
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
});
export default login;
