import React from "react";
import { View, StyleSheet } from "react-native";
import Row from "./Row";

const MiniWordle = ({ userStateArray, board }) => {
  return (
    <View style={styles.container}>
      {board.map((e, i) => (
        <Row
          key={i}
          userStateArray={userStateArray[i]}
          board={userStateArray[i]}
          page="score"
        />
      ))}
    </View>
  );
};

export default MiniWordle;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
