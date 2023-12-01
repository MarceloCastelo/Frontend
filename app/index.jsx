import React from "react";
import {
  ImageBackground,
  Button,
  StyleSheet,
  Image,
  View,
  Pressable,
  Text,
} from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

const App = () => {
  const [loaded] = useFonts({
    MontserratMedium: require("../assets/fonts/Montserrat-Medium.ttf"),
    MontserratBold: require("../assets/fonts/Montserrat-Bold.ttf"),
    MontserratThin: require("../assets/fonts/Montserrat-Thin.ttf"),
    MontserratLight: require("../assets/fonts/Montserrat-Light.ttf"),
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./../assets/images/fundoSemLogo.png")}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.overlay} /> {/* Sobreposição para escurecer */}
        <Image
          style={styles.logoSize}
          source={require("./../assets/images/logoBranca.png")}
        />
        <LinearGradient
          colors={["#357C7A", "#12506B"]}
          style={styles.botao}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text
            style={{
              marginTop: 28,
              textAlign: "center",
              marginBottom: 28,
              color: "white",
              fontSize: 20,
              lineHeight: 24,
              fontWeight: '500',
              fontFamily: "MontserratMedium",
            }}
          >
            Ajudamos pessoas a conquistarem seus objetivos através do
            planejamento financeiro.
          </Text>
          <View>
            <Link href="/login/" asChild>
              <Pressable
                style={{
                  marginTop: 30,
                  alignItems: "center",
                  backgroundColor: "#0C2C44",
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    padding: 20,
                    color: "white",
                    fontSize: 24,
                    lineHeight: 24,
                    fontFamily: "MontserratMedium",
                  }}
                >
                  Entrar
                </Text>
              </Pressable>
            </Link>
          </View>

          <View>
            <Link href="/registrar/" asChild>
              <Pressable style={{ marginTop: 30, alignItems: "center" }}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    lineHeight: 24,
                    fontFamily: "MontserratMedium",
                  }}
                >
                  Cadastre-se
                </Text>
              </Pressable>
            </Link>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  container: {
    backgroundColor: "black",
    flexDirection: "column",
    flex: 1,
  },

  botao: {
    alignSelf: "center",
    width: "95%",
    height: "45%",
    backgroundColor: "#367D7B",
    padding: 24,
    borderRadius: 12,
  },

  logoSize: {
    width: 259,
    height: 94,
    alignSelf: "center",
    shadowColor: "black",
    marginTop: "50%",
    marginBottom: 100,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Cor preta com 50% de opacidade
  },
});

export default App;
