import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import AIcon from "react-native-vector-icons/AntDesign";
import FoundIcon from "react-native-vector-icons/Foundation";
import Ionicon from "react-native-vector-icons/Ionicons";
import MIcon from "react-native-vector-icons/MaterialIcons";
import CategoryScreen from "../screens/CategoryScreen";
import HomeScreen from "../screens/HomeScreen";
import OrderScreen from "../screens/OrderScreen";
import BlankPage from "./BlankPage";

const BotTab = createBottomTabNavigator();
const HomeBotTab = () => {
  return (
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
        component={BlankPage}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicon name="person-outline" size={26} color={color}></Ionicon>
          ),
        }}
      />
    </BotTab.Navigator>
  );
};

export default HomeBotTab;
