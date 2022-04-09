import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import MainNavigator from "./navigation";

import store from "./store";
import { Provider } from "react-redux";
import { init } from "./db";

init()
  .then(() => {
    console.log("Database initialized");
  })
  .catch((err) => {
    console.log("Database failed to connect");
    console.log(err.message);
  });

export default function App() {
  const [loaded] = useFonts({
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) return <AppLoading />;

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
