import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import SLIcon from "react-native-vector-icons/SimpleLineIcons";

const MyHeader = (props: any) => {
  return (
    <View style={{ height: "15%", backgroundColor: "#FDD40C" }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {}}>
          <IonIcon
            name="arrow-back"
            size={30}
            style={{ marginLeft: 20 }}
          ></IonIcon>
        </TouchableOpacity>
        <Text style={{ fontSize: 19, fontWeight: "bold" }}>{props.title}</Text>
        <TouchableOpacity onPress={() => {}}>
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

export default MyHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
