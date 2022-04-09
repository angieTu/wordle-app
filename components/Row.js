import React from "react";
import Cell from "../components/Cell";
import { View, StyleSheet } from "react-native";

const Row = ({ board, userStateArray, level, page }) => {
  level = level - 1;
  const data = page === "game" && board ? board[level] : board;
  const stateArray = page === "game" ? userStateArray[level] : userStateArray;

  return (
    <View className="row" style={styles.row}>
      {data === undefined ? (
        <>
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </>
      ) : (
        <>
          {data &&
            stateArray &&
            data.map((e, i) => (
              <Cell key={i} letter={e} state={stateArray[i]} page={page} />
            ))}
        </>
      )}
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
});
