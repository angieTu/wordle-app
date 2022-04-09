import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import MiniWordle from "../components/MiniWordle";

const MyScoreScreen = () => {
  const board = useSelector((state) => state.game.board);
  const rounds = useSelector((state) => state.game.rounds);
  const userStateArray = useSelector((state) => state.game.userStateArray);
  const finishedGame = useSelector((state) => state.game.finishedGame);
  const win = useSelector((state) => state.game.win);
  const total = useSelector((state) => state.game.total);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Estadísticas</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "80%",
          }}
        >
          <Text style={styles.text}>{total} Jugadas</Text>
          <Text style={styles.text}>{win} Victorias</Text>
        </View>
        <View>
          <Text style={styles.title}>Distribución</Text>
        </View>
        {finishedGame && (
          <MiniWordle
            board={board}
            rounds={rounds}
            userStateArray={userStateArray}
          />
        )}
      </View>
    </View>
  );
};

export default MyScoreScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    width: "90%",
  },
  title: {
    fontFamily: "PoppinsMedium",
    fontSize: 20,
    marginTop: 15,
    textAlign: "center",
  },
  text: {
    fontSize: 15,
  },
});
