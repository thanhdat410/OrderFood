import { NavigationContainer } from "@react-navigation/native";
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
import HeaderWithIcon from "../components/HeaderWithIcon";
interface Info {
  name: string;
  phone: string;
  address: string;
}
const InfoScreen = ({ route, navigation }: any) => {
  const { name, phone, address }: Info = route.params;
  return (
    <View style={{ flex: 1 }}>
      <HeaderWithIcon title="THÔNG TIN GIAO HÀNG" />
      <View style={{ padding: 10 }}>
        <Text style={styles.boldText}>Thông tin giao hàng</Text>
        <Text style={{ color: "#B7B7B7" }}>Họ tên</Text>
        <TextInput multiline={true} editable style={styles.inputBorder}>
          {JSON.stringify(name).replace(/['"]+/g, "")}
        </TextInput>
        <Text style={{ color: "#B7B7B7" }}>Số điện thoại</Text>
        <TextInput multiline={true} editable style={styles.inputBorder}>
          {JSON.stringify(phone).replace(/['"]+/g, "")}
        </TextInput>
        <Text style={{ color: "#B7B7B7" }}>Địa chỉ nhận hàng</Text>
        <TextInput multiline={true} editable style={styles.inputBorder}>
          {JSON.stringify(address).replace(/['"]+/g, "")}
        </TextInput>
        <TouchableOpacity
          style={{
            backgroundColor: "#F9D423",
            paddingVertical: 10,
            marginTop: 10,
            borderRadius: 5,
          }}
        >
          <Text style={[styles.boldText, { textAlign: "center" }]}>
            XÁC NHẬN
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InfoScreen;
const styles = StyleSheet.create({
  boldText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  inputBorder: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#B7B7B7",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
