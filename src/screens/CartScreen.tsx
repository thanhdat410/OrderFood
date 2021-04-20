import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { Dimensions } from "react-native";
import AIcon from "react-native-vector-icons/AntDesign";
import FIcon from "react-native-vector-icons/Foundation";
import MCIon from "react-native-vector-icons/MaterialCommunityIcons";
import SLIcon from "react-native-vector-icons/SimpleLineIcons";

import HeaderWithoutIcon from "../components/HeaderWithoutIcon";

import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView } from "react-native-gesture-handler";

import Collapsible from "react-native-collapsible";

const Stack = createStackNavigator();

const CartScreen = ({ route, navigation }: any) => {
  let indexID = 0;

  const [isCollapsed, setCollapsed] = React.useState<boolean>(true);
  const handleCollapse = () => {
    setCollapsed((prevState) => !prevState);
  };
  const [order, setOrder] = React.useState([
    {
      id: "zsa245x",
      name: "Cơm đậu hũ nhồi thịt sốt cà chua",
      quantity: 1,
      price: "30.000đ",
      discountPrice: "27.000đ",
    },
    {
      id: "2xz5sax",
      name: "Cơm đậu hũ nhồi thịt sốt cà chua",
      quantity: 1,
      price: "30.000đ",
      discountPrice: "27.000đ",
    },
  ]);

  const { data } = route.params;

  // const getData=(props:any) => {
  //   console.log(props)
  // }

  React.useEffect(() => {
    const newItem = { ...data };
    const newOrder = [...order];
    newOrder.splice(indexID, 1, newItem);
    setOrder(newOrder);
    indexID + 1;
    console.log(newOrder);
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <HeaderWithoutIcon title={"GIỎ HÀNG"} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            paddingTop: 10,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <View
              style={[
                styles.outerCircle,
                { backgroundColor: "white", borderColor: "#FDD40C" },
              ]}
            >
              <View
                style={[styles.innerCircle, { backgroundColor: "#FDD40C" }]}
              >
                <Text> 1 </Text>
              </View>
            </View>
            <Text>Giỏ hàng</Text>
          </View>

          <Text style={{ color: "black", paddingTop: 10 }}>••••••••••</Text>
          <View style={{ alignItems: "center" }}>
            <View
              style={[
                styles.outerCircle,
                { backgroundColor: "white", borderColor: "#B7B7B7" },
              ]}
            >
              <View
                style={[styles.innerCircle, { backgroundColor: "#B7B7B7" }]}
              >
                <Text> 2 </Text>
              </View>
            </View>
            <Text style={{ color: "#B7B7B7" }}>Thanh toán</Text>
          </View>

          <Text style={{ color: "black", paddingTop: 10 }}>••••••••••</Text>
          <View style={{ alignItems: "center" }}>
            <View
              style={[
                styles.outerCircle,
                { backgroundColor: "white", borderColor: "#B7B7B7" },
              ]}
            >
              <View
                style={[styles.innerCircle, { backgroundColor: "#B7B7B7" }]}
              >
                <Text> 3 </Text>
              </View>
            </View>
            <Text style={{ color: "#B7B7B7" }}>Hoàn tất</Text>
          </View>
        </View>
        <View
          style={{
            height: 110,
            backgroundColor: "white",
            marginVertical: 5,
            padding: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.boldText}>Thông tin giao hàng</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("InfoScreen", {
                  name: "Nguyễn Kim Ngân",
                  phone: "0912345678",
                  address: "123 Hàm Nghi - Bến Nghé - Q1 - Hồ Chí Minh",
                });
              }}
            >
              <Text style={{ color: "#0265F9" }}>Sửa</Text>
            </TouchableOpacity>
          </View>
          <Text>Nguyễn Kim Ngân</Text>
          <Text>0912345678</Text>
          <Text>123 Hàm Nghi - Bến Nghé - Q1 - Hồ Chí Minh</Text>
        </View>

        <View
          style={{
            backgroundColor: "white",
            marginVertical: 5,
            padding: 10,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.boldText}>Đơn hàng của bạn</Text>
            <Text>4 món</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              handleCollapse();
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AIcon
                name={isCollapsed ? "right" : "down"}
                size={14}
                color={"#0265F9"}
              ></AIcon>
              <Text style={{ fontSize: 15, color: "#0265F9" }}>
                {isCollapsed ? "Chi tiết" : "Rút gọn"}
              </Text>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={isCollapsed}>
            <FlatList
              keyExtractor={(item) => item.id}
              data={order}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: "column",
                    borderBottomColor: "gray",
                    borderStyle: "dotted",
                    borderBottomWidth: 2,
                    marginVertical: 10,
                  }}
                >
                  <Text style={{ color: "#B7B7B7" }}>{item.name}</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingBottom: 10,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          console.log(JSON.stringify(data));
                        }}
                      >
                        <AIcon name="minussquareo" size={35}></AIcon>
                      </TouchableOpacity>
                      <Text style={[styles.boldText, { paddingHorizontal: 5 }]}>
                        {item.quantity}
                      </Text>
                      <TouchableOpacity onPress={() => {}}>
                        <AIcon name="plussquareo" size={35}></AIcon>
                      </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{ marginRight: 10 }}>{item.price}</Text>
                      <Text style={{ fontWeight: "bold" }}>
                        {item.discountPrice}
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            />
          </Collapsible>
        </View>

        <View style={[styles.component, { backgroundColor: "white" }]}>
          <Text style={styles.boldText}>Ghi Chú</Text>
          <View style={styles.noteContainer}>
            <FIcon name="clipboard-notes" size={25} color={"#B7B7B7"}></FIcon>
            <TextInput
              editable
              style={{ flex: 1, height: 30 }}
              multiline={true}
              placeholder={"Thêm ghi chú của bạn (nếu có)"}
            />
          </View>
        </View>

        <View style={[styles.component, { backgroundColor: "white" }]}>
          <Text style={styles.boldText}>Khuyến Mãi</Text>
          <View style={styles.discountContainer}>
            <MCIon
              name="ticket-confirmation"
              size={25}
              color={"#B7B7B7"}
            ></MCIon>
            <TextInput
              editable
              style={{ flex: 1, height: 30 }}
              multiline={true}
              placeholder={"Nhập mã khuyến mãi"}
            />
            <TouchableOpacity
              style={{ backgroundColor: "#FDD40C", borderRadius: 3 }}
              onPress={() => {
                // getData(props.)
              }}
            >
              <Text style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
                Áp dụng
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.component, { backgroundColor: "white" }]}>
          <Text style={styles.boldText}>Cộng giỏ hàng</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Tạm tính</Text>
            <Text style={styles.boldText}>144.000đ</Text>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Khuyến mãi</Text>
            <Text style={styles.boldText}>-0đ</Text>
          </View>
          <View></View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: 2,
            backgroundColor: "white",
            paddingVertical: 10,
          }}
        >
          <SLIcon name="handbag" size={30}></SLIcon>
          <Text style={[styles.boldText, { color: "red" }]}>114.000đ</Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#F9D423",
              paddingHorizontal: 50,
              paddingVertical: 10,
              borderRadius: 5,
            }}
            onPress={() => {
              navigation.navigate("PaymentScreen");
            }}
          >
            <Text style={{ fontWeight: "bold" }}>XÁC NHẬN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: 5,
    paddingBottom: 5,
  },
  noteContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#B7B7B7",
    borderRadius: 5,
    padding: 5,
    marginTop: 7,
  },

  discountContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#B7B7B7",
    borderRadius: 5,
    marginTop: 7,
  },
  component: {
    marginTop: 5,
    padding: 10,
  },
  boldText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  innerCircle: {
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: Dimensions.get("window").width * 0.1,
    height: Dimensions.get("window").width * 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  outerCircle: {
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: Dimensions.get("window").width * 0.12,
    height: Dimensions.get("window").width * 0.12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
  },
});
