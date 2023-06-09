import React, { Component } from "react";
import { Animated, Easing, Text, Image, View } from "react-native";

export default class MyComponent extends Component {
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
      <View style={{ width: 40, height: 40, zIndex: 15 }}>
        <Animated.View style={{ opacity: this.state.opacity }}>
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
          />
        </Animated.View>
      </View>
    );
  }
}
