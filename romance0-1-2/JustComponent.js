import { View } from "moti";
import React, { Component } from "react";
import { Animated, Easing, Text, Image, StyleSheet } from "react-native";
import MyDots from "./MyDots";
export default class JustComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(1),
    };
  }

  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.opacity, {
          toValue: 0,
          duration: 6000,
          ease: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 1500,
          ease: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }
  render() {
    return (
      <View style={styles.dot}>
        <View style={{ width: 40, height: 40, zIndex: 15 }}>
          <Animated.View style={{ opacity: this.state.opacity }}>
            <View
              style={{
                alignContent: "center",
                alignItems: "center",
                position: "absolute",
              }}
            >
              <Image
                source={require("./assets/doscorazonesbusqueda.png")}
                style={{
                  width: 40,
                  height: 40,
                  zIndex: 5,
                  alignContent: "center",
                  alignItems: "center",
                }}
                resizeMode="contain"
              ></Image>
            </View>
          </Animated.View>
          <View
            style={{
              alignContent: "center",
              alignItems: "center",
              top: -250,
            }}
          >
            <Image
              source={require("./assets/roman.png")}
              style={{
                width: 200,
                zIndex: 5,
                alignContent: "center",
                alignItems: "center",
              }}
              resizeMode="contain"
            ></Image>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  dot: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 1,
    alignItems: "center",
  },
  center: { alignItems: "center", justifyContent: "center" },
});
