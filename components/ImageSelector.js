import React, { useEffect, useState } from "react";
import { View, Text, Button, Alert, StyleSheet, Image } from "react-native";

import * as ImagePicker from "expo-image-picker";
// import * as Permissions from "expo-permissions";

const ImageSelector = ({ onImageSelected }) => {
  const [pickedUri, setPickedUri] = useState();

  const verifyPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();

    if (granted) {
      return true;
    }

    Alert.alert(
      "Permisos insuficientes",
      "Necesita otorgar permisos de la cámara",
      [{ text: "Ok" }]
    );

    return false;
  };
  const handleTakeImage = async () => {
    const isCameraOk = await verifyPermissions();
    if (!isCameraOk) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });

    setPickedUri(image.uri);
    onImageSelected(image.uri);
  };
  const verifyPermissionsImage = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (granted) {
      return true;
    }

    Alert.alert(
      "Permisos insuficientes",
      "Necesita otorgar permisos de la galeria",
      [{ text: "Ok" }]
    );

    return false;
  };
  const openImagePickerAsync = async () => {
    const isCameraOk = await verifyPermissionsImage();
    if (!isCameraOk) return;

    const image = await ImagePicker.launchImageLibraryAsync();

    setPickedUri(image.uri);
    onImageSelected(image.uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUri ? (
          <Text>No hay imagen seleccionada</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUri }}></Image>
        )}
      </View>
      <Button onPress={handleTakeImage} title="Tomar foto"></Button>
      <Button onPress={openImagePickerAsync} title="Abrir galeria"></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: "100%",
  },
  preview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ImageSelector;
