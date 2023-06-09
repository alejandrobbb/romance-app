import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Ppr from "./Ppr";
import Profile from "./profile";
import WaveThingy from "./WaveThingy";
import Conf from "./conf";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function MainStack(props) {
  const { onPressButton, onLongPressButton, onPressButtonMess } = props;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="WaveThing" component={WaveThingy} />
        <Stack.Screen name="profil" component={Profile} />
        <Stack.Screen name="ppp" component={Ppr} />
        <Stack.Screen name="conf" component={Conf} />
        <Stack.Screen name="WaveThingy">
          {(navigation) => (
            <WaveThingy {...navigation} {...props} {...Profile} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
