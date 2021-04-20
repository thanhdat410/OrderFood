import * as React from "react";
import { useState, useEffect } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

const getRandomColor = () => {
  const COLOR_LIST = ["deeppink", "green", "yellow", "cyan", "blue"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
};

const BlankPage = () => {
  // const initColor = "deeppink";
  const [color, setColor] = useState("deeppink");
  let newColor = "deeppink";

  const saveData = async () => {
    try {
      await AsyncStorage.setItem("savedColor", newColor);
    } catch (error) {
      // Error saving data
    }
  };

  const getData = async () => {
    try {
      let color = await AsyncStorage.getItem("savedColor");

      if (color !== null) {
        // We have data!!
        setColor(color);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  useEffect(() => {
    getData();
  });

  const handleClick = () => {
    newColor = getRandomColor();
    setColor(newColor);
  };
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={() => {
        handleClick();
        saveData();
      }}
    >
      <Text>Still it's cool, just cool,put it in the mouth ! </Text>
      <Text>*Tack* Noice</Text>
    </TouchableOpacity>
  );
};

export default BlankPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
