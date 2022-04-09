import React from "react";
import Cell from "../components/Cell";
import { View, StyleSheet } from "react-native";

const CurrentRow = ({ userValueArray, page }) => {
  return (
    <View className="row" style={styles.row}>
      <Cell letter={userValueArray ? userValueArray[0] : ""} page={page} />
      <Cell letter={userValueArray ? userValueArray[1] : ""} page={page} />
      <Cell letter={userValueArray ? userValueArray[2] : ""} page={page} />
      <Cell letter={userValueArray ? userValueArray[3] : ""} page={page} />
      <Cell letter={userValueArray ? userValueArray[4] : ""} page={page} />
    </View>
  );
};

export default CurrentRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
});
