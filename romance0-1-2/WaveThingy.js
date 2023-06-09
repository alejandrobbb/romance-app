import * as React from "react";
import { Feather } from "@expo/vector-icons";
import { MotiView } from "@motify/components";
import { Animated, Easing } from "react-native-reanimated";
import {
  StyleSheet,
  View,
  Image,
  Alert,
  Platform,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import MyComponent from "./MyComponent";
import JustComponent from "./JustComponent";
import MyDots from "./MyDots";
import { useState } from "react";

export default function WaveThingy(props) {
  const { onPressButton, onLongPressButton, onPressButtonMess, navigation } =
    props;

  const [comproba, setComproba] = useState(0);

  const ComprobaRes = () => {
    setComproba(comproba - 1);
    setValor(valor - 5);
  };
  const ComprobaSum = () => {
    setComproba(comproba + 1);
  };

  const [VerifyCred, setVerifyCred] = useState(false);

  const controlBotonCred = () => {
    setVerifyCred(true);
    setTimeout(() => {
      setVerifyCred(false);
    }, 30250);
  };

  const eventCred = () => {
    setVerifyCred(false);
  };

  const [valor, setValor] = useState(6);
  let textoValor = valor;

  if (valor > 1000) {
    textoValor = "1k";
  }
  if (valor > 2000) {
    textoValor = "2k";
  }

  if (valor < 0) {
    (textoValor = "no hay creditos"), setValor(0);
  }

  const SumarCred = () => {
    setValor(valor + 10);
  };

  const restar = () => {
    setValor(valor - 50);
  };

  return (
    <View style={styles.container_1}>
      <View style={styles.container_arrow}>
        <View style={styles.buttonBack}>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate("profil");
            }}
            underlayColor="transparent"
          >
            <FontAwesome5Icon
              name="chevron-left"
              style={styles.iconbk}
              underlayColor="transparent"
            />
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.container_top}>
        <TouchableHighlight
          onPress={() => {
            navigation.navigate("ppp");
          }}
          underlayColor="transparent"
          onLongPress={onLongPressButton}
          underlayColor="transparent"
        >
          <View style={styles.button_n_romances}>
            <Ionicons name="chatbubbles-sharp" style={styles.icon} />
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => {
            navigation.navigate("conf");
          }}
          onLongPress={props.onLongPressButton}
          underlayColor="transparent"
        >
          <View style={styles.button_n_bars}>
            <FontAwesome5Icon name="bars" style={styles.icon} />
          </View>
        </TouchableHighlight>
      </View>

      <View style={styles.container_searcher}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "transparent",
            top: -70,
          }}
          /*centro buscador*/
        >
          <View style={styles.container}>
            {VerifyCred == true ? (
              <>
                <MyDots />
                <MyComponent />
              </>
            ) : (
              <>
                <JustComponent />
              </>
            )}
          </View>
        </View>
      </View>

      <View style={styles.container_bottom}>
        <View style={styles.heart_creditz}>
          <FontAwesome5Icon name="heart" style={styles.iconcred} />
          <Text style={styles.valcredit}>{textoValor}</Text>
        </View>
        <View style={styles.dobleradio}>
          <TouchableHighlight
            onPress={() => {
              restar();
              SumarCred();
              ComprobaSum();
              controlBotonCred();
            }}
            onLongPress={props.onLongPressButton}
            underlayColor="transparent"
          >
            <View style={styles.buttonbus}>
              <FontAwesome5Icon name="search" style={styles.icon} />
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.shadow_profile}>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate("profil");
            }}
            underlayColor="transparent"
          >
            <Image
              source={require("./assets/fotop.jpg")}
              style={styles.perfilfoto}
              resizeMode="contain"
              underlayColor="transparent"
            />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dots: {
    zIndex: 8,
  },
  container_arrow: {
    alignItems: "flex-start",
  },
  iconbk: {
    alignItems: "center",
    color: "black",
    width: 100,
    padding: 12,
    fontSize: 30,
    textAlign: "center",
    backgroundColor: "transparent",
  },
  container_1: {
    flex: 1,

    backgroundColor: "#ab2f3a",
  },
  iconback: {
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
  valcredit: {
    color: "yellow",
    width: 50,
    fontSize: 15,
    fontWeight: "bold",
    left: -25,
    top: 0,
    textAlign: "center",
  },
  perfilfoto: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  shadow_profile: {
    borderColor: "white",
    borderRadius: 30,
    elevation: 7,
    borderWidth: 0.85,
    width: 52,
    height: 52,
    left: 25,
    top: 8,
    shadowColor: "white", // para iOS C33030
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  container_top: {
    alignSelf: "flex-end",
    top: -55,
    flexDirection: "row",
    alignContent: "center",
    flex: 1,
    padding: 5,
  },
  container_searcher: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flex: 6,
  },
  container_principal: {
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#ab2f3a",
  },
  container_bottom: {
    flexDirection: "row",
    backgroundColor: "transparent",

    flex: 1,
    justifyContent: "center",
  },
  dobleradio: {
    bottom: 25,
    marginBottom: 0,
    margin: 5,
    height: 62,
    width: 142,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    borderWidth: 0.15,
    borderRadius: 32,
    position: "relative",
  },

  buttonbus: {
    height: 60,
    width: 140,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C33030",
    borderColor: "#FC2947", //FC2947
    borderRadius: 30,
    elevation: 12,
    borderWidth: 1.85,
    shadowColor: "black", // sombra gris
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },

  heart_creditz: {
    top: 10,
    left: 1,
    alignItems: "center",
  },
  iconcred: {
    alignItems: "center",
    color: "yellow",
    width: 50,
    fontSize: 24,
    fontWeight: "bold",
    left: -25,
    top: 0,
    textAlign: "center",
  },
  posit: {
    justifyContent: "flex-end",
  },
  icon: {
    alignItems: "center",
    color: "white",
    width: 100,
    padding: 12,
    fontSize: 24,
    textAlign: "center",
  },
  posit: {
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "transparent",
    zIndex: 11,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    center: { alignItems: "center", justifyContent: "center" },
  },
  button_n_bars: {
    borderColor: "#8B0A00",
    borderWidth: 0.75,
    margin: 10,
    top: 10,
    width: 70,
    alignItems: "center",
    backgroundColor: "#E63426",
    borderRadius: 30,
    elevation: 6,
    shadowColor: "black", // para iOS
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowOpacity: 1.25,
    shadowRadius: 15.84,
  },
  button_n_romances: {
    borderColor: "#8B0A00",
    borderWidth: 0.75,
    margin: 10,
    top: 10,
    width: 70,
    alignItems: "center",
    backgroundColor: "#E63426",
    borderRadius: 30,

    elevation: 8,
    shadowColor: "black", // para iOS
    shadowOffset: {
      width: 450,
      height: 8,
    },
    shadowOpacity: 15.25,
    shadowRadius: 15.84,
  },

  buttonText: {
    textAlign: "center",
    padding: 12,
    color: "white",
  },
});
