import * as React from "react";
import { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";

const BlankPage = () => {
  return (
    <View style={styles.container}>
      <Text>Still it's cool, just cool,put it in the mouth ! </Text>
      <Text>*Tack* Noice</Text>
    </View>
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
