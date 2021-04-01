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

import IonIcon from "react-native-vector-icons/Ionicons";
import AIcon from "react-native-vector-icons/AntDesign";
import SLIcon from "react-native-vector-icons/SimpleLineIcons";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Flatlist from "../components/HomeFlatlist";
import HomeFlatlist from "../components/HomeFlatlist";
import MainDishData from "../components/DataCategoryDish/MainDishData";
import SideDishData from "../components/DataCategoryDish/SideDishData";
import DrinkData from "../components/DataCategoryDish/DrinkData";
import CategoryFlatlist from "../components/CategoryFlatlist";
import { Header } from "react-native/Libraries/NewAppScreen";
import OrderHeader from "../components/MyHeader";
import MyHeader from "../components/MyHeader";

const topTab = createMaterialTopTabNavigator();

const MainDish = () => {
  return <CategoryFlatlist data={MainDishData} />;
};

const SideDish = () => {
  return <CategoryFlatlist data={SideDishData} />;
};

const Drink = () => {
  return <CategoryFlatlist data={DrinkData} />;
};

const CategoryScreen = () => {
  return (
    <View style={styles.container}>
      <MyHeader title="DANH MỤC" />
      {/* <View style={{ height: "15%", backgroundColor: "#FDD40C" }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {}}>
            <IonIcon
              name="arrow-back"
              size={30}
              style={{ marginLeft: 20 }}
            ></IonIcon>
          </TouchableOpacity>
          <Text style={{ fontSize: 19, fontWeight: "bold" }}>DANH MỤC</Text>
          <TouchableOpacity onPress={() => {}}>
            <SLIcon
              name="handbag"
              size={30}
              style={{
                backgroundColor: "pink",
                paddingHorizontal: 10,
                paddingVertical: 10,
                marginRight: 10,
                opacity: 0.8,
                borderRadius: 5,
              }}
            ></SLIcon>
          </TouchableOpacity>
        </View>
      </View> */}

      <topTab.Navigator
        tabBarOptions={{
          labelStyle: { textTransform: "none", fontSize: 15 },
        }}
      >
        <topTab.Screen name="Món chính" component={MainDish} />
        <topTab.Screen name="Món phụ" component={SideDish} />
        <topTab.Screen name="Nước uống" component={Drink} />
      </topTab.Navigator>
    </View>
  );
};

export default CategoryScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
