import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

import React, { useEffect } from "react";

import { StyleSheet, View, Text } from "react-native";
import HomeBotTab from "./src/components/HomeBotTab";
import CartScreen from "./src/screens/CartScreen";
import FinishScreen from "./src/screens/FinishScreen";
import InfoScreen from "./src/screens/InfoScreen";
import PaymentScreen from "./src/screens/PaymentScreen";
import { TouchableOpacity } from "react-native-gesture-handler";
// import WooCommerceAPI from "react-native-woocommerce-api"

const BotTab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const WooCommerceAPI = require("react-native-woocommerce-api");

// const getData = () => {
//   const test = new WooCommerceAPI({
//     url: "http://dev.gioantrua.vn", // Your store URL
//     ssl: true,
//     consumerKey: "ck_9384f1842921757f4dfe43f473bfde8e385c7daf", // Your consumer secret
//     consumerSecret: "cs_981f7f510fbe0d38feacfa48cd685558c3612068", // Your consumer secret
//     wpAPI: true, // Enable the WP REST API integration
//     version: "wc/v3", // WooCommerce WP REST API version
//     queryStringAuth: true,
//   });
//   test
//     .get("orders")
//     .then((response: { data: any }) => {
//       console.log("Success");
//       console.log(response);
//     })
//     .catch((error: { response: { data: any } }) => {
//       console.log(error.response.data);
//     });
// };

export default function App() {
  useEffect(() => {
    const test = new WooCommerceAPI({
      url: "http://dev.gioantrua.vn", // Your store URL
      ssl: true,
      consumerKey: "ck_c75dc71d06963f21bd41104645fe4f9ef155525d", // Your consumer secret
      consumerSecret: "cs_d957ed9c6d3997f27d38c1b4cfbe9d86278cdeed", // Your consumer secret
      wpAPI: true, // Enable the WP REST API integration
      version: "wc/v3", // WooCommerce WP REST API version
      queryStringAuth: true,
      //oauth_signature_method: "HMAC-SHA1",
    });
    test
      .get("order")
      .then((data: any) => {
        console.log(data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  });
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="HomeScreen" component={HomeBotTab} />
          <Stack.Screen name="HomeCart" component={CartScreen} />
          <Stack.Screen name="InfoScreen" component={InfoScreen} />
          <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
          <Stack.Screen name="FinishScreen" component={FinishScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <TouchableOpacity
        onPress={() => {
          // getData();
        }}
      >
        <Text style={{ paddingVertical: 20, backgroundColor: "pink" }}>
          Touch
        </Text>
      </TouchableOpacity> */}

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
