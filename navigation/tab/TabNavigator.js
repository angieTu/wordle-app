import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GameNavigator from "../GameNavigator";
import ScoreNavigator from "../ScoreNavigator";

import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <BottomTabs.Screen
        name="GameTab"
        component={GameNavigator}
        options={{
          tabBarLabel: "Game",
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name="ios-game-controller-outline"
                size={24}
                color={focused ? "red" : "black"}
              />
              <Text>Game</Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="ScoreTab"
        component={ScoreNavigator}
        options={{
          tabBarLabel: "Score",
          tabBarIcon: ({ focused }) => (
            <View>
              <Foundation
                name="clipboard-notes"
                size={24}
                color={focused ? "red" : "black"}
              />
              <Text>Score</Text>
            </View>
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default TabNavigator;
