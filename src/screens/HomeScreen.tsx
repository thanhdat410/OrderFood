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
  Button,
  ScrollView,
} from "react-native";
import { Overlay } from "react-native-elements";

import AIcon from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/Feather";
import SLIcon from "react-native-vector-icons/SimpleLineIcons";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Flatlist from "../components/HomeFlatlist";
import HomeFlatlist from "../components/HomeFlatlist";

const TopTab = createMaterialTopTabNavigator();

// AppRegistry.registerComponent("main", () => App);

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.tabContainer}>
      <View style={{ height: "25%" }}>
        <ImageBackground
          source={require("../assets/TopThumbnail.png")}
          style={styles.image}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.toggleDrawer();
              }}
            >
              <Icon
                name="menu"
                size={30}
                style={{
                  color: "white",
                  // position: "absolute",
                  paddingTop: 40,
                  paddingLeft: 20,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <SLIcon
                name="handbag"
                size={30}
                style={{
                  marginTop: 30,
                  backgroundColor: "pink",
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  marginRight: 10,
                  opacity: 0.8,
                  borderRadius: 5,
                }}
              ></SLIcon>

              <Text>1</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <TopTab.Navigator
        swipeEnabled={false}
        tabBarOptions={{
          scrollEnabled: true,
          tabStyle: { width: 80, height: 50 },
          labelStyle: { fontSize: 12 },
        }}
      >
        <TopTab.Screen name="Thứ 2" component={HomeFlatlist} />
        <TopTab.Screen name="Thứ 3" component={HomeFlatlist} />
        <TopTab.Screen name="Thứ 4" component={HomeFlatlist} />
        <TopTab.Screen name="Thứ 5" component={HomeFlatlist} />
        <TopTab.Screen name="Thứ 6" component={HomeFlatlist} />
        <TopTab.Screen name="Thứ 7" component={HomeFlatlist} />
        <TopTab.Screen name="Chủ Nhật" component={HomeFlatlist} />
      </TopTab.Navigator>

      {/* <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.toggleDrawer();
          }}
        >
          <Icon
            name="menu"
            size={30}
            style={{
              color: "black",
              // position: "absolute",
              // paddingTop: 40,
              // paddingLeft: 20,
            }}
          />
        </TouchableOpacity>
        <Button onPress={() => navigation.toggleDrawer()} title="zxczx" />
      </View> */}
    </View>
  );
};

export default HomeScreen;

// const Monday = () => {
//   const [dish] = React.useState([
//     {
//       id: "1",
//       name: "Cơm cá riêu hồng chiên",
//       image: require("../assets/Dish1.png"),
//       beforeDiscount: "30.000đ",
//       price: "27.000đ",
//       quantity: "Còn 15 suất",
//     },
//     {
//       id: "2",
//       name: "Cơm chả trứng",
//       image: require("../assets/Dish2.png"),
//       beforeDiscount: null,
//       price: "27,000đ",
//       quantity: "Hết hàng",
//     },
//     {
//       id: "3",
//       name: "Cơm cá chả riêu hồng",
//       image: require("../assets/Dish4.png"),
//       beforeDiscount: "30.000đ",
//       price: "27.000đ",
//       quantity: "Còn 15 suất",
//     },
//     {
//       id: "4",
//       name: "Cơm cá chả riêu hồng",
//       image: require("../assets/Dish4.png"),
//       beforeDiscount: "30.000đ",
//       price: "27.000đ",
//       quantity: "Còn 15 suất",
//     },
//     {
//       id: "5",
//       name: "Cơm cá chả riêu hồng",
//       image: require("../assets/Dish4.png"),
//       beforeDiscount: "30.000đ",
//       price: "27.000đ",
//       quantity: "Còn 15 suất",
//     },
//     {
//       id: "6",
//       name: "Cơm cá chả riêu hồng",
//       image: require("../assets/Dish4.png"),
//       beforeDiscount: "30.000đ",
//       price: "27.000đ",
//       quantity: "Còn 15 suất",
//     },
//   ]);

//   return (
//     <View style={{ flex: 1 }}>
//       <View style={{ padding: 15 }}>
//         <Text style={{ fontWeight: "bold", fontSize: 16 }}>Món Chính</Text>
//       </View>

//       <FlatList
//         keyExtractor={(item) => item.id}
//         data={dish}
//         horizontal
//         renderItem={({ item }) => (
//           <View
//             style={{
//               padding: 10,

//               alignItems: "center",
//             }}
//           >
//             <Image source={item.image} style={styles.dish}></Image>
//             <Text style={{ textAlign: "center", width: "75%", height: 40 }}>
//               {item.name}
//             </Text>
//             <View
//               style={{
//                 flexDirection: "row",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <Text
//                 style={{
//                   color: "gray",
//                   textDecorationLine: "line-through",
//                   textDecorationStyle: "solid",
//                 }}
//               >
//                 {item.beforeDiscount}
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 16,
//                   fontWeight: "bold",
//                   color: "red",
//                   marginLeft: 10,
//                 }}
//               >
//                 {item.price}
//               </Text>
//             </View>

//             <Text style={{ textAlign: "center" }}>{item.quantity}</Text>

//             <View
//               style={{
//                 flexDirection: "row",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//               }}
//             >
//               <TouchableOpacity onPress={() => {}}>
//                 <AIcon name="minussquareo" size={35}></AIcon>
//               </TouchableOpacity>
//               <Text
//                 style={{
//                   fontWeight: "bold",
//                   fontSize: 17,
//                   paddingHorizontal: 15,
//                 }}
//               >
//                 1
//               </Text>
//               <TouchableOpacity onPress={() => {}}>
//                 <AIcon name="plussquareo" size={35}></AIcon>
//               </TouchableOpacity>
//             </View>

//             <TouchableOpacity
//               style={{
//                 backgroundColor: "#421514",
//                 marginTop: 10,
//                 borderRadius: 5,
//               }}
//               onPress={() => {}}
//             >
//               <Text
//                 style={{
//                   paddingVertical: 10,
//                   paddingHorizontal: 15,
//                   textAlign: "center",
//                   color: "white",
//                 }}
//               >
//                 Thêm vào giỏ
//               </Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

const styles = StyleSheet.create({
  tabContainer: {
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
