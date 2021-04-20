import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import SLIcon from "react-native-vector-icons/SimpleLineIcons";
import { useNavigation } from "@react-navigation/native";

interface IProps {
  title: string;
}

const HeaderWithIcon = (props: IProps) => {
  const navigation = useNavigation();
  return (
    <View style={{ paddingVertical: 15, backgroundColor: "#FDD40C" }}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <IonIcon
            name="arrow-back"
            size={30}
            style={{ marginLeft: 20 }}
          ></IonIcon>
        </TouchableOpacity>
        <Text style={{ fontSize: 19, fontWeight: "bold" }}>{props.title}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PaymentScreen");
          }}
        >
          <SLIcon
            name="handbag"
            size={30}
            style={{
              backgroundColor: "pink",
              paddingHorizontal: 10,
              paddingVertical: 10,
              marginRight: 10,
              opacity: 0.8,
              borderRadius: 5,
            }}
          ></SLIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderWithIcon;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
