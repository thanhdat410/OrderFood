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

import AIcon from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/Feather";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Flatlist from "../components/HomeFlatlist";
import HomeFlatlist from "../components/HomeFlatlist";
import HeaderWithIcon from "../components/HeaderWithIcon";
import BlankPage from "../components/BlankPage";

const topTab = createMaterialTopTabNavigator();

const OrderScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderWithIcon title="ĐƠN HÀNG" />
      <topTab.Navigator
        tabBarOptions={{
          labelStyle: { textTransform: "none", fontSize: 16 },
        }}
      >
        <topTab.Screen name="Đang giao" component={BlankPage} />
        <topTab.Screen name="Lịch sử" component={BlankPage} />
      </topTab.Navigator>
    </View>
  );
};

export default OrderScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  dish: {
    width: 160,
    height: 160,
  },
});
