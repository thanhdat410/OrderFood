import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { useState, useEffect } from "react";
import {
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import SLIcon from "react-native-vector-icons/SimpleLineIcons";
import HomeFlatlist from "../components/HomeFlatlist";
import MainDishData from "../components/CategoryData/MainDishData";
import SideDishData from "../components/CategoryData/SideDishData";
import HeaderWithIcon from "../components/HeaderWithIcon";
import CartModal from "../components/CartModal";

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const BotTab = createBottomTabNavigator();

// const AddCount = () => {
//   setCount(+1);
//   console.log(count);
// };
const HomeScreen = ({ navigation }: any) => {
  let indexID = 0;
  const [data, setData] = useState({});
  const [count, setCount] = useState(0);
  // const [visible, setModal] = useState(true);

  const [isFit, setSize] = useState(true);

  // const handleVisible = () => {
  //   setModal((prevState) => !prevState);
  // };

  const handleCount = (a: number) => {
    setCount(count + a);
  };

  const getCount = () => {
    return count;
  };

  const handleSize = () => {
    setSize(!isFit);
  };

  const getData = (props: any) => {
    const newItem = { ...props };
    setData(newItem);
  };

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
                // navigation.toggleDrawer();
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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("HomeCart", { data: data });
                // console.log(data);
              }}
            >
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
              <Text
                style={[
                  styles.orderCount,
                  {
                    fontSize: isFit ? 14 : 10,
                    top: isFit ? 50 : 55,
                    left: isFit ? 20 : 18,
                  },
                ]}
              >
                {count}
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={CartScreen} />
      </Stack.Navigator> */}
      <TopTab.Navigator
        swipeEnabled={false}
        tabBarOptions={{
          scrollEnabled: true,
          tabStyle: { width: 80, height: 50 },
          labelStyle: { fontSize: 12 },
        }}
      >
        <TopTab.Screen
          name="Thứ 2"
          children={() => (
            <HomeFlatlist
              fixCount={handleCount}
              fixSize={handleSize}
              getCount={getCount}
              getData={getData}
            />
          )}
        />
        <TopTab.Screen name="Thứ 3" component={HomeFlatlist} />
        <TopTab.Screen name="Thứ 4" component={HomeFlatlist} />
        <TopTab.Screen name="Thứ 5" component={HomeFlatlist} />
        <TopTab.Screen name="Thứ 6" component={HomeFlatlist} />
        <TopTab.Screen name="Thứ 7" component={HomeFlatlist} />
        <TopTab.Screen
          name="Chủ Nhật"
          children={() => (
            <HomeFlatlist
              setCount={handleCount}
              // setSize={handleSize}
              // getCount={getCount}
            />
          )}
        />
      </TopTab.Navigator>
      {/* <TouchableOpacity onPress={() => handleVisible()}>
        <Text>CLICK</Text>
      </TouchableOpacity>
      <CartModal data={visible} handleVisible={handleVisible} /> */}
      {/* <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={isAccept}
          onRequestClose={() => {
            setAcceptvisible(!isAccept);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>CHUYỂN TRẠNG THÁI ĐƠN HÀNG</Text>
              <TouchableOpacity
                style={styles.buttonReady}
                onPress={() => {
                  setAcceptvisible(!isAccept);
                }}
              >
                <Text style={styles.buttonText}>XÁC NHẬN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View> */}
    </View>
  );
};

export default HomeScreen;

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
  orderCount: {
    position: "absolute",
    fontWeight: "bold",
  },
  buttonReady: {
    borderRadius: 8,
    marginTop: 12,
    justifyContent: "center",
    backgroundColor: "#FDD40C",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
  centeredView: {
    width: 400,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
