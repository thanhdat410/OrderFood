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

import HeaderWithoutIcon from "../components/HeaderWithoutIcon";

const FinishScreen = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1 }}>
      <HeaderWithoutIcon title={"HOÀN TẤT"} />
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
              { backgroundColor: "white", borderColor: "#FDD40C" },
            ]}
          >
            <View style={[styles.innerCircle, { backgroundColor: "#FDD40C" }]}>
              <Text> 3 </Text>
            </View>
          </View>
          <Text>Hoàn tất</Text>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Đặt Hàng Thành Công
        </Text>
        <Image source={require("../assets/Finish.png")}></Image>

        <Text style={{ color: "#B7B7B7" }}>
          Đơn hàng của bạn đang được chuẩn bị và
        </Text>
        <Text style={{ color: "#B7B7B7" }}>
          {" "}
          sẽ được giao đến bạn trong giây lát
        </Text>
        <Text style={{ color: "#B7B7B7" }}>
          Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#F9D423",
            borderRadius: 5,
            paddingVertical: 12,
            paddingHorizontal: 50,
            marginTop: 10,
          }}
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        >
          <Text style={{ fontWeight: "bold" }}>VỀ TRANG CHỦ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FinishScreen;

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
