import { useState, useEffect } from "react";
import { View, StyleSheet, Button, ScrollView } from "react-native";

import CurrentRow from "../components/CurrentRow";
import { useSelector, useDispatch } from "react-redux";
import Row from "../components/Row";
import Profile from "../components/Profile";

import { getRandomWord, newRound } from "../store/actions/game.actions";
import Keyboard from "../components/Keyboard";

const Home = () => {
  const dispatch = useDispatch();

  const rounds = useSelector((state) => state.game.rounds);
  const finishedGame = useSelector((state) => state.game.finishedGame);
  const board = useSelector((state) => state.game.board);
  const userWord = useSelector((state) => state.game.userWord);
  const userStateArray = useSelector((state) => state.game.userStateArray);
  const randomWord = useSelector((state) => state.game.randomWord);
  const [userValueArray, setUserValueArray] = useState([]);
  const [newGame, setNewGame] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    dispatch(getRandomWord());
  }, [newGame]);

  useEffect(() => {
    <Keyboard />;
  }, [randomWord]);

  useEffect(() => {
    const newArray = [];
    const getValueArray = () => {
      if (userWord.length <= 5) {
        for (let i = 0; i < userWord.length; i++) {
          newArray.push(userWord[i].value);
          setUserValueArray(newArray);
        }
      }
      if (userWord.length === 0) {
        setUserValueArray([]);
      }
    };
    getValueArray();
  }, [userWord]);

  const handleNewGame = () => {
    dispatch(newRound(), setNewGame(!newGame));
  };
  console.log(randomWord);

  return (
    <ScrollView className="game-container" style={styles.container}>
      {finishedGame && <Button title="Jugar" onPress={handleNewGame} />}
      <Button title="Guardar puntaje" onPress={() => setModalVisible(true)} />
      <Profile setModalVisible={setModalVisible} modalVisible={modalVisible} />
      <View className="cells-container" style={styles.cells}>
        {rounds === 1 && finishedGame === false ? (
          <CurrentRow userValueArray={userValueArray} page={"game"} />
        ) : (
          <Row
            board={board}
            userStateArray={userStateArray}
            level={1}
            page={"game"}
          />
        )}
        {rounds === 2 && finishedGame === false ? (
          <CurrentRow userValueArray={userValueArray} page={"game"} />
        ) : (
          <Row
            board={board}
            userStateArray={userStateArray}
            level={2}
            page={"game"}
          />
        )}
        {rounds === 3 && finishedGame === false ? (
          <CurrentRow userValueArray={userValueArray} page={"game"} />
        ) : (
          <Row
            board={board}
            userStateArray={userStateArray}
            level={3}
            page={"game"}
          />
        )}
        {rounds === 4 && finishedGame === false ? (
          <CurrentRow userValueArray={userValueArray} page={"game"} />
        ) : (
          <Row
            board={board}
            userStateArray={userStateArray}
            level={4}
            page={"game"}
          />
        )}
        {rounds === 5 && finishedGame === false ? (
          <CurrentRow userValueArray={userValueArray} page={"game"} />
        ) : (
          <Row
            board={board}
            userStateArray={userStateArray}
            level={5}
            page={"game"}
          />
        )}
        {rounds === 6 && finishedGame === false ? (
          <CurrentRow userValueArray={userValueArray} page={"game"} />
        ) : (
          <Row
            board={board}
            userStateArray={userStateArray}
            level={6}
            page={"game"}
          />
        )}
      </View>

      <Keyboard />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cells: {
    alignItems: "center",
    justifyContent: "space-between",
  },
});
