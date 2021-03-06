import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Cell = ({ letter, state, page }) => {
  return (
    <View
      style={{
        ...styles.cell,
        backgroundColor:
          (state === "success" && "#6aaa64") ||
          (state === "almost" && "#c9b458") ||
          (state === "none" && "#787c7e"),
      }}
    >
      <Text style={styles.text}>{page === "game" ? letter : ""}</Text>
    </View>
  );
};

export default Cell;

const styles = StyleSheet.create({
  cell: {
    borderColor: "#d3d6da",
    borderWidth: 2,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  text: {
    fontFamily: "PoppinsMedium",
  },
});
