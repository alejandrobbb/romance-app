import React from "react";
import { View, StyleSheet } from "react-native";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";

const MyDots = () => {
  return (
    <View style={[styles.dot, styles.center]}>
      {[...Array(2).keys()].map((index) => {
        return (
          <MotiView
            from={{ opacity: 0.7, scale: 1 }}
            animate={{ opacity: 0, scale: 4 }}
            transition={{
              type: "timing",
              duration: 3000,
              easing: Easing.out(Easing.ease),
              //loop: true,
              repeat: 9,
              delay: index * 1300,
              repeatReverse: false,
            }}
            key={index}
            style={[StyleSheet.absoluteFillObject, styles.dot]}
          />
        );
      })}
    </View>
  );
};

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
  },
  center: { alignItems: "center", justifyContent: "center" },
});

export default MyDots;
