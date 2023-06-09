import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import React from "react";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
const Ppr = ({ navigation }) => {
  return (
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
      <View style={styles.ppanel}>
        <View style={styles.panel}>
          <View style={styles.photos}>
            <Image
              source={require("./assets/perfil3.png")}
              style={styles.perfilfoto1}
              resizeMode="contain"
              underlayColor="transparent"
            />
          </View>
          <View style={styles.textsgifs}>
            <Text style={styles.name_profile}>Camila.</Text>
            <Text style={styles.name_profile}>gifs.</Text>
          </View>
        </View>
        <View style={styles.panel}></View>
        <View style={styles.panel}></View>
        <View style={styles.panel}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textsgifs: {
    flexDirection: "column",
  },
  name_profile: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
    //check-decagram
  },
  photos: {
    justifyContent: "flex-start",
    flexDirection: "row",
    elevation: 8,
    margin: 8,
  },
  perfilfoto1: {
    width: 90,
    height: 90,
    borderRadius: 80,

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
    height: 100,
    margin: 5,
    backgroundColor: "white",
    borderRadius: 30,
    borderColor: "#e5e2e9",
    borderWidth: 1.85,
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
  },
  backgroundprofile: {
    backgroundColor: "#ab2f3a",
    flex: 1,
  },
  icon: {
    alignItems: "center",
    color: "#e5e2e9",
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

export default Ppr;
