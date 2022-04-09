import React from "react";
import { StyleSheet, View } from "react-native";

import KeyboardRow from "./KeyboardRow";
import { alphabet1 } from "../constants/alphabet";
import { alphabet2 } from "../constants/alphabet";
import { alphabet3 } from "../constants/alphabet";

const Keyboard = () => {
  return (
    <View style={styles.keyboard}>
      <KeyboardRow letters={alphabet1} />
      <KeyboardRow letters={alphabet2} />
      <KeyboardRow letters={alphabet3} />
    </View>
  );
};

export default Keyboard;

const styles = StyleSheet.create({
  keyboard: { flexDirection: "column" },
});
