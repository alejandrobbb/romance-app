import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.backgroundprofile}>
      <View style={styles.portada}>
        <Image
          source={require("./assets/portada.png")}
          style={styles.portadamed}
          underlayColor="transparent"
        />
      </View>
      <View style={styles.buttonBack}>
        <TouchableHighlight
          onPress={() => {
            navigation.navigate("WaveThingy");
          }}
          underlayColor="transparent"
        >
          <FontAwesome5Icon
            name="chevron-left"
            style={styles.icon}
            underlayColor="transparent"
          />
        </TouchableHighlight>
      </View>

      <View style={styles.main}>
        <View style={styles.spaceprofile}>
          <View style={styles.gifts_space}>
            <Image
              source={require("./assets/fotop.jpg")}
              style={styles.perfilfoto}
              resizeMode="contain"
              underlayColor="transparent"
            />

            <View style={styles.spacegif}>
              <View style={styles.gift_P}>
                <View style={styles.gift_01}>
                  <Image
                    source={require("./assets/wine.jpg")}
                    style={styles.fotogif1}
                    resizeMode="contain"
                    underlayColor="transparent"
                  />
                </View>
              </View>

              <View style={styles.gift_1}>
                <View style={styles.gifcentra}>
                  <Ionicons
                    name="chatbubbles-sharp"
                    style={styles.iconchat}
                    underlayColor="transparent"
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.spaceinf}>
            <View style={styles.divname}>
              <Text style={styles.name_profile}>Maximo Decimo P.</Text>

              <MaterialCommunityIcons
                name="check-decagram"
                style={styles.iconcheck}
                underlayColor="transparent"
              />
            </View>
            <View style={styles.divname}>
              <Text style={styles.space_about}>Sobre mi.</Text>
              <FontAwesome5Icon
                name="feather-alt"
                style={styles.iconfeather}
                underlayColor="transparent"
              />
            </View>
            <View style={styles.divname}>
              <Text style={styles.about}>
                Soy una persona amante del buen vino y las mujeres latinas. Soy
                un abogado retirado, no me gusta perder el tiempo.
              </Text>
            </View>
            <View style={styles.divname}>
              <Text style={styles.space_city}>California, U.S.</Text>
            </View>
          </View>
        </View>
        <View style={styles.pcontainerphotos}>
          <View style={styles.containerphotos}>
            <View style={styles.divphotos}>
              <View style={styles.photos}>
                <Image
                  source={require("./assets/perfil3.png")}
                  style={styles.perfilfoto1}
                  resizeMode="contain"
                  underlayColor="transparent"
                />
              </View>
              <View style={styles.photos}>
                <Image
                  source={require("./assets/perfil4.jpg")}
                  style={styles.perfilfoto1}
                  resizeMode="contain"
                  underlayColor="transparent"
                />
              </View>

              <View style={styles.photos}>
                <Image
                  source={require("./assets/perfil5.jpg")}
                  style={styles.perfilfoto1}
                  resizeMode="contain"
                  underlayColor="transparent"
                />
              </View>
            </View>
            <View style={styles.divphotos}>
              <View style={styles.photos}>
                <Image
                  source={require("./assets/perfil1.png")}
                  style={styles.perfilfoto1}
                  resizeMode="contain"
                  underlayColor="transparent"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gift_01: {
    height: "100%",
    width: "100%",
  },
  gifcentra: {
    textAlign: "center",
    top: 10,
  },
  pcontainerphotos: {
    alignItems: "center",
  },
  containerphotos: {
    alignContent: "center",
  },
  spacegif: {
    backgroundColor: "transparent",
    width: "65%",
    flexDirection: "row-reverse",
    alignItems: "flex-end",
  },
  spaceinf: {
    top: -20,
    backgroundColor: "transparent",
  },
  gifts_space: {
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "baseline",
  },
  portadamed: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  perfilfoto1: {
    width: 110,
    height: 110,
    borderRadius: 3,
    borderColor: "#0dc143", //verde
  },
  divphotos: {
    alignItems: "flex-end",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  photos: {
    marginBottom: 10,
    margin: 1,
    width: 110,
    height: 110,
    alignItems: "center",
    backgroundColor: "trnasparent",
    borderColor: "#FC2947",
    borderRadius: 3,
    elevation: 8,
  },
  fotogif1: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    backgroundColor: "black",
    borderRadius: 30,
    borderColor: "#ab2f3a",
    borderWidth: 0.85,
  },
  gift_P: {
    marginBottom: 10,
    margin: 10,
    width: 85,
    height: 60,
    top: -10,
    alignItems: "flex-end",
    backgroundColor: "#C33030",
    borderColor: "#e5e2e9",
    borderRadius: 30,
    borderWidth: 1.85,
  },
  gift_1: {
    marginBottom: 10,
    margin: 1,
    width: 65,
    height: 60,
    top: -10,
    alignItems: "center",
    backgroundColor: "#C33030",
    borderColor: "#e5e2e9",
    borderRadius: 30,
    borderWidth: 1.85,
  },
  about: {
    fontSize: 15,
    padding: 10,
  },
  space_city: {
    fontSize: 17,
    fontWeight: "bold",
    padding: 10,
    top: -15,
  },
  space_about: {
    fontSize: 15,
    fontWeight: "bold",
    padding: 10,
    top: 15,
  },
  iconfeather: {
    alignItems: "center",
    color: "gray",
    padding: 10,
    top: 15,
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "transparent",
  },
  iconchat: {
    color: "white",
    fontSize: 30,

    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  iconcheck: {
    alignItems: "center",
    color: "#4ea2fd",
    padding: 5,
    top: 20,
    fontSize: 30,
    textAlign: "center",
    backgroundColor: "transparent",
  },
  divname: {
    flexDirection: "row",
  },
  spaceprofile: {
    flexDirection: "column",
    top: -5,
  },
  name_profile: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
    top: 20, //check-decagram
  },
  main: {
    flexDirection: "column",
    margin: 5,
    top: -10,
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
  top: {
    flexDirection: "row",
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
  perfilfoto: {
    width: 120,
    height: 120,
    borderRadius: 100,
    margin: 1,
    alignItems: "center",
    borderColor: "#0dc143", //c1b01e amar//blu 4ea2fd // grin 0dc143
    borderWidth: 4,
  },
  portada: {
    position: "absolute",
    width: "100%",
    height: 150,
    backgroundColor: "#e5e2e9",
  },
  backgroundprofile: {
    backgroundColor: "#e5e2e9",
    flex: 1,
  },
});
export default Profile;
