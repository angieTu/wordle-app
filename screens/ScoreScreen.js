import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loadScore } from "../store/actions/game.actions";

const ScoreScreen = ({ navigation }) => {
  const scores = useSelector((state) => state.game.scores);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadScore());
  }, []);

  const handleOnClick = () => {
    navigation.navigate("MyScore");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top 20:</Text>
      <Button title="Actual Score" onPress={handleOnClick} />
      <ScrollView>
        {scores &&
          scores.map((e) => (
            <View key={e.id} style={styles.score}>
              <Text style={styles.name}>{e.name}</Text>
              <View style={styles.preview}>
                <Image style={styles.image} source={{ uri: e.image }}></Image>
              </View>
              <Text style={styles.text}>Total: {e.total}</Text>
              <Text style={styles.text}>Ganados: {e.win}</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default ScoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  score: {
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    alignItems: "center",
  },
  name: {
    fontFamily: "PoppinsMedium",
    fontSize: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontFamily: "PoppinsBold",
  },
  text: { fontFamily: "PoppinsMedium", fontSize: 15 },
  preview: {
    width: "20%",
    height: 80,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 1,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
});
