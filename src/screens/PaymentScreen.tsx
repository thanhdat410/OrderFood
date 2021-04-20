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
import { RadioButton } from "react-native-paper";
import { Dimensions } from "react-native";
import SLIcon from "react-native-vector-icons/SimpleLineIcons";

import HeaderWithoutIcon from "../components/HeaderWithoutIcon";

const PaymentScreen = ({ navigation }: any) => {
  const [checked, setChecked] = React.useState("first");
  return (
    <View style={{ flex: 1 }}>
      <HeaderWithoutIcon title={"THANH TOÁN"} />
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
            <View style={[styles.innerCircle, { backgroundColor: "#FDD40C" }]}>
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
              { backgroundColor: "white", borderColor: "#FDD40C" },
            ]}
          >
            <View style={[styles.innerCircle, { backgroundColor: "#FDD40C" }]}>
              <Text> 2 </Text>
            </View>
          </View>
          <Text>Thanh toán</Text>
        </View>

        <Text style={{ color: "black", paddingTop: 10 }}>••••••••••</Text>
        <View style={{ alignItems: "center" }}>
          <View
            style={[
              styles.outerCircle,
              { backgroundColor: "white", borderColor: "#B7B7B7" },
            ]}
          >
            <View style={[styles.innerCircle, { backgroundColor: "#B7B7B7" }]}>
              <Text> 3 </Text>
            </View>
          </View>
          <Text style={{ color: "#B7B7B7" }}>Hoàn tất</Text>
        </View>
      </View>

      <View style={{ flex: 1, padding: 10, backgroundColor: "white" }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Hình thức thanh toán
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
            color={"#FDD40C"}
          />
          <Text>Tiền mặt</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <RadioButton
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
            color={"#FDD40C"}
          />
          <Text>Momo</Text>
        </View>
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
        <Text style={{ color: "red", fontWeight: "bold", fontSize: 16 }}>
          114.000đ
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#F9D423",
            paddingHorizontal: 50,
            paddingVertical: 10,
            borderRadius: 5,
          }}
          onPress={() => {
            navigation.navigate("FinishScreen");
          }}
        >
          <Text style={{ fontWeight: "bold" }}>XÁC NHẬN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
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
