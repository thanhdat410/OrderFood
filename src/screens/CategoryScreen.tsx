import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import CategoryFlatlist from "../components/CategoryFlatlist";
import DrinkData from "../components/CategoryData/DrinkData";
import MainDishData from "../components/CategoryData/MainDishData";
import SideDishData from "../components/CategoryData/SideDishData";
import HeaderWithIcon from "../components/HeaderWithIcon";

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
      <HeaderWithIcon title="DANH MỤC" />

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
