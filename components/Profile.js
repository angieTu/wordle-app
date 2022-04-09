import React, { useEffect, useLayoutEffect, useState } from "react";
import ImageSelector from "./ImageSelector";
import {
  View,
  TextInput,
  Text,
  Modal,
  StyleSheet,
  Pressable,
} from "react-native";
import { addScore, reloadApp } from "../store/actions/game.actions";
import { useDispatch, useSelector } from "react-redux";

const Profile = ({ setModalVisible, modalVisible }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const total = useSelector((state) => state.game.total);
  const win = useSelector((state) => state.game.win);

  const handleSave = () => {
    dispatch(addScore(name, image, total, win), reloadApp());
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.name}>Nombre</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
            />
            <ImageSelector onImageSelected={setImage} />
            <View style={styles.buttons}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cancelar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={handleSave}
              >
                <Text style={styles.textStyle}>Guardar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "90%",
    height: 500,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  name: { fontFamily: "PoppinsMedium", fontSize: 20 },
  input: {
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    width: "50%",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
