import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScoreScreen from "../screens/ScoreScreen";
import MyScoreScreen from "../screens/MyScoreScreen";

const Stack = createNativeStackNavigator();
const ScoreNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Score">
      <Stack.Screen name="Score" component={ScoreScreen} />
      <Stack.Screen name="MyScore" component={MyScoreScreen} />
    </Stack.Navigator>
  );
};

export default ScoreNavigator;
