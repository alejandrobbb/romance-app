import React, { Component } from "react";
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MotiView } from "@motify/components";
import { Easing } from "react-native-reanimated";
import WaveThingy from "./WaveThingy"; // Importar WaveThingy
import MyComponent from "./MyComponent";
import MainStack from "./MainStack";

export default class Touchables extends Component {
  _onPressButton() {
    Alert.alert("1 tap");
  }

  _onLongPressButton() {
    Alert.alert("Tap presionadoss");
  }

  _onPressButtonMess() {
    Alert.alert("Tap mensajes nuevos");
  }

  render() {
    const { _onPressButton, _onLongPressButton, _onPressButtonMess } = this;
    return (
      <MainStack
        onPressButton={_onPressButton}
        onLongPressButton={_onLongPressButton}
        onPressButtonMess={_onPressButtonMess}
      />
    );
  }
}

// en MainStack.js

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C33030",
  },
});
