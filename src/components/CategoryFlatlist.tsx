import * as React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";

import AIcon from "react-native-vector-icons/AntDesign";
interface dish {
  id: string;
  name: string;
  image: any;
  beforeDiscount?: string;
  price: string;
  quantity: number;
  note: string;
}
interface Cate {
  data: dish[];
}
const CategoryFlatlist = (props: Cate) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={props.data}
        windowSize={1000}
        numColumns={2}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 10,
              flex: 0.5,
            }}
          >
            <Image source={item.image} style={styles.dish}></Image>
            <Text style={{ textAlign: "center", height: 40 }}>{item.name}</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "gray",
                  textDecorationLine: "line-through",
                  textDecorationStyle: "solid",
                }}
              >
                {item.beforeDiscount}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "red",
                  marginLeft: 10,
                }}
              >
                {item.price}
              </Text>
            </View>

            <Text style={{ textAlign: "center" }}>{item.note}</Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => {}}>
                <AIcon name="minussquareo" size={35}></AIcon>
              </TouchableOpacity>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 17,
                  paddingHorizontal: 15,
                }}
              >
                1
              </Text>
              <TouchableOpacity onPress={() => {}}>
                <AIcon name="plussquareo" size={35}></AIcon>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: "#421514",
                marginTop: 10,
                borderRadius: 5,
              }}
              onPress={() => {}}
            >
              <Text
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  textAlign: "center",
                  color: "white",
                }}
              >
                Thêm vào giỏ
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default CategoryFlatlist;

const styles = StyleSheet.create({
  dish: {
    width: 160,
    height: 160,
  },
});
