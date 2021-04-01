import * as React from "react";
import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import AIcon from "react-native-vector-icons/AntDesign";
import FoundIcon from "react-native-vector-icons/Foundation";
import Ionicon from "react-native-vector-icons/Ionicons";
import MIcon from "react-native-vector-icons/MaterialIcons";
import HomeDrawer from "./src/components/HomeDrawer";
import CategoryScreen from "./src/screens/CategoryScreen";
import HomeScreen from "./src/screens/HomeScreen";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import OrderScreen from "./src/screens/OrderScreen";

const BotTab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Image
        source={require("./assets/TopThumbnail.png")}
        style={{ resizeMode: "cover" }}
      ></Image> */}

      {/* <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeDrawer} />
          <Drawer.Screen name="Danh mục" component={CategoryScreen} />
        </Drawer.Navigator>
      </NavigationContainer> */}
      <NavigationContainer>
        <BotTab.Navigator
          tabBarOptions={{
            labelStyle: { fontSize: 12 },
            activeTintColor: "#FDD40C",
            inactiveTintColor: "black",
          }}
        >
          <BotTab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <FoundIcon name="home" size={30} color={color}></FoundIcon>
              ),
            }}
          />

          <BotTab.Screen
            name="Danh mục"
            component={CategoryScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <AIcon name="appstore-o" size={26} color={color}></AIcon>
              ),
            }}
          />
          <BotTab.Screen
            name="Đơn hàng"
            component={OrderScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <MIcon name="list-alt" size={30} color={color}></MIcon>
              ),
            }}
          />
          <BotTab.Screen
            name="Tài khoản"
            component={HomeDrawer}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicon
                  name="person-outline"
                  size={26}
                  color={color}
                ></Ionicon>
              ),
            }}
          />
        </BotTab.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
