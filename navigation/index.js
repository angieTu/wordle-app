import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./tab/TabNavigator";

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
