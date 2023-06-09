import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import React from "react";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import WaveThingy from "./WaveThingy";
import { useState } from "react";

const Conf = ({ navigation }) => {
  const [valor, setValor] = useState(2200);
  const addcred = () => {
    setValor(valor + 400);
  };
  let textoValor = valor;
  return (
    <ScrollView>
      <View style={styles.backgroundprofile}>
        <TouchableHighlight
          onPress={() => {
            navigation.navigate("WaveThingy");
          }}
          underlayColor="transparent"
        >
          <View style={styles.buttonBack}>
            <FontAwesome5Icon
              name="chevron-left"
              style={styles.icon}
              underlayColor="transparent"
            />
          </View>
        </TouchableHighlight>

        <View style={styles.photos}>
          <Image
            source={require("./assets/roman.png")}
            style={styles.logo}
            resizeMode="contain"
            underlayColor="transparent"
          />
        </View>
        <View style={styles.ppanel}>
          <View style={styles.panel}>
            <Text style={styles.creditostit}>Hola Maximo.</Text>

            <Text style={styles.creditossub}>
              Creditos de Romance dorado actuales.
            </Text>
            <View style={styles.buttomccor}>
              <View style={styles.heart_creditz}>
                <AntDesign name="heart" style={styles.iconcor} />
                <Text style={styles.valcredit}>{textoValor}</Text>
              </View>
            </View>
            <Text style={styles.name_profile}>Recargar creditos:</Text>
            <View style={styles.photoscard}>
              <Image
                source={require("./assets/credd.png")}
                style={styles.perfilfoto1}
                resizeMode="contain"
                underlayColor="transparent"
              />
              <Text style={styles.cardinf}>1040 **** **** **12</Text>
              <FontAwesome5Icon name="wallet" style={styles.iconcred} />
              <View style={styles.buttomwallet}>
                <View style={styles.heart_creditz}>
                  <Text style={styles.valtarj}>Añadir otra tarjeta +</Text>
                </View>
              </View>
            </View>

            <View style={styles.panelcompras}>
              <View style={styles.textsgifs}>
                <Text style={styles.name_profile}>400 creditos</Text>
              </View>

              <View style={styles.textscomp}>
                <Text style={styles.buttomc1}>Comprar</Text>
              </View>
            </View>
            <View style={styles.panelcompras}>
              <View style={styles.textsgifs}>
                <Text style={styles.name_profile}>2.000 creditos</Text>
              </View>

              <View style={styles.textscomp}>
                <Text style={styles.buttomc1}>Comprar</Text>
              </View>
            </View>
            <View style={styles.panelcompras}>
              <View style={styles.textsgifs}>
                <Text style={styles.name_profile}>8.000 creditos</Text>
              </View>

              <View style={styles.textscomp}>
                <Text style={styles.buttomc1}>Comprar</Text>
              </View>
            </View>
            <View style={styles.panelcompras}>
              <View style={styles.textsgifs}>
                <Text style={styles.name_profile}>15.200 creditos</Text>
              </View>

              <View style={styles.textscomp}>
                <Text style={styles.buttomc1}>Comprar</Text>
              </View>
            </View>
            <View style={styles.panelcompras}>
              <View style={styles.textsgifs}>
                <Text style={styles.name_profile}>50.000 creditos</Text>
              </View>

              <View style={styles.textscomp}>
                <Text style={styles.buttomc1}>Comprar</Text>
              </View>
            </View>
          </View>

          <View style={styles.photos}>
            <Image
              source={require("./assets/pasarela.png")}
              style={styles.logopasarela}
              resizeMode="contain"
              underlayColor="transparent"
            />
          </View>

          <View style={styles.photos}>
            <Image
              source={require("./assets/bbordertr-1.png")}
              style={styles.logoab}
              resizeMode="contain"
              underlayColor="transparent"
            />
          </View>
          <Text style={styles.copyr}>
            Copyright www.negocios.alejandrobbb.com © 2023.
          </Text>
          <Text style={styles.copyr}>Todos los derechos reservados.</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  valcredit: {
    color: "black",
    width: 300,
    fontSize: 15,
    fontWeight: "bold",
    top: 0,
    textAlign: "center",
  },
  valtarj: {
    color: "white",
    height: 40,
    width: 300,
    fontSize: 20,
    fontWeight: "bold",
    top: 0,
    textAlign: "center",
    textAlignVertical: "center",
  },
  iconwallet: {
    alignItems: "center",
    color: "yellow",
    width: 50,
    fontSize: 24,
    fontWeight: "bold",
    top: 0,
    textAlign: "center",
  },
  iconcor: {
    alignItems: "center",
    color: "yellow",
    width: 50,
    fontSize: 24,
    fontWeight: "bold",
    top: 0,
    textAlign: "center",
  },
  iconcred: {
    alignItems: "center",
    color: "black",
    width: 50,
    fontSize: 24,
    fontWeight: "bold",
    top: 0,
    textAlign: "center",
  },
  heart_creditz: {
    top: 5,

    alignItems: "center",
  },
  panelcompras: {
    flexDirection: "row",
    alignContent: "space-between",
  },
  compra_botones: {
    backgroundColor: "gray",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    width: 300,
  },
  buttomwallet: {
    height: 60,
    width: 270,
    backgroundColor: "black",
    margin: 15,
    fontSize: 20,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    borderRadius: 30,
    borderWidth: 0.8,
    borderColor: "gray",
    textAlignVertical: "center",
  },
  buttomccor: {
    height: 60,
    width: 120,
    backgroundColor: "white",
    margin: 15,
    fontSize: 20,
    textAlign: "center",
    color: "#e5e2e9",
    fontWeight: "bold",
    borderRadius: 30,
    borderWidth: 3.8,
    borderColor: "yellow",
    textAlignVertical: "center",
  },
  buttomc1: {
    height: 60,
    width: 120,
    backgroundColor: "black",
    fontSize: 20,
    textAlign: "center",
    color: "#e5e2e9",
    fontWeight: "bold",
    borderRadius: 30,
    borderWidth: 0.8,
    borderColor: "gray",
    textAlignVertical: "center",
  },

  cardinf: {
    fontSize: 20,
    textAlign: "center",
    color: "#e5e2e9",
    fontWeight: "bold",
  },
  name_profile: {
    fontSize: 20,
    justifyContent: "flex-end",
    textAlign: "center",
    fontWeight: "bold",
    margin: 5,
    right: 5,
  },
  centracredd: {
    flexDirection: "row",
  },
  centracred: {
    flexDirection: "row-reverse",
  },
  textsgifs: {
    width: "60%",
    flexDirection: "row",
    margin: 5,
    left: 10,
    alignContent: "center",
    alignItems: "center",
  },
  textscomp: {
    flexDirection: "row-reverse",
    right: -1,
    width: "25%",
    margin: 5,
  },

  creditostit: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    padding: 25,
    //check-decagram
  },
  creditossub: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
    padding: 5,
    //check-decagram
  },
  copyr: {
    fontSize: 10,
    textAlign: "center",
    fontWeight: "bold",

    //check-decagram
  },
  photos: {
    flexDirection: "column",
    alignItems: "center",
    margin: 2,
  },
  photoscard: {
    flexDirection: "column",
    alignItems: "center",
    margin: 2,
    top: -20,
  },
  logoab: {
    width: 45,
    height: 80,
  },
  logopasarela: {
    width: 320,
    height: 140,
    margin: 10,
  },
  logo: {
    width: 300,
    height: 50,
    borderColor: "#0dc143", //verde
  },
  perfilfoto1: {
    width: 200,
    height: 220,
    borderRadius: 10,
    borderColor: "#0dc143", //verde
  },
  ppanel: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
  },
  panel: {
    width: "96%",
    height: 980,
    margin: 5,
    backgroundColor: "white",
    borderRadius: 30,
    borderColor: "#e5e2e9",
    borderWidth: 1.85,
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
  },
  backgroundprofile: {
    backgroundColor: "#e5e2e9",
    flex: 1,
    height: 1450,
  },
  icon: {
    alignItems: "center",
    color: "black",
    width: 100,
    padding: 12,
    fontSize: 30,
    textAlign: "center",
    backgroundColor: "transparent",
  },
  buttonBack: {
    borderColor: "transparent",
    borderWidth: 1.75,
    margin: 10,
    top: 10,
    width: 70,
    left: -20,
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 15,
  },
});

export default Conf;
