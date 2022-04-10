import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  selectLetter,
  deleteLetter,
  confirmWord,
} from "../store/actions/game.actions";

const KeyboardRow = ({ letters }) => {
  const dispatch = useDispatch();
  const randomWord = useSelector((state) => state.game.randomWord);
  const finishedGame = useSelector((state) => state.game.finishedGame);

  const handleSelectLetter = (letter) => {
    dispatch(selectLetter(letter));
  };

  const handleDelete = () => {
    dispatch(deleteLetter());
  };

  const handleConfirm = () => {
    dispatch(confirmWord(randomWord));
  };

  const handleFunction = (letter) => {
    if (letter === "DELETE") {
      handleDelete();
    }
    if (letter === "ENVIAR") {
      finishedGame === false && handleConfirm();
    } else if (letter !== "ENVIAR" && letter !== "DELETE") {
      handleSelectLetter(letter);
    }
  };
  return (
    <View style={styles.keyboardRow}>
      {letters.map((letter, i) => (
        <TouchableOpacity
          key={i}
          style={styles.keyboardRow}
          onPress={() => handleFunction(letter.value)}
        >
          <View
            style={{
              ...styles.key,
              backgroundColor:
                (letter.state === "success" && "#6aaa64") ||
                (letter.state === "almost" && "#c9b458") ||
                (letter.state === "none" && "#787c7e") ||
                "#d3d6da",
            }}
          >
            <Text style={styles.keyLetter}>
              {letter.value === "DELETE" ? (
                <Feather name="delete" size={18} color="black" />
              ) : (
                letter.value
              )}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default KeyboardRow;

const styles = StyleSheet.create({
  keyboardRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  key: {
    backgroundColor: "#d3d6da",
    padding: 10,
    margin: 3,
    borderRadius: 5,
  },
  keyLetter: {
    fontWeight: "500",
    fontSize: 15,
  },
});
