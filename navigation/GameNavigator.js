import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GameScreen from "../screens/GameScreen";

const Stack = createNativeStackNavigator();
const GameNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Game">
      <Stack.Screen name="Game" component={GameScreen} />
    </Stack.Navigator>
  );
};

export default GameNavigator;
