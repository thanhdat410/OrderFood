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
import Icon from "react-native-vector-icons/Feather";
import MainDishData from "../components/DataCategoryDish/MainDishData";
import SideDishData from "../components/DataCategoryDish/SideDishData";
import DrinkData from "../components/DataCategoryDish/DrinkData";

const HomeFlatlist = () => {
  // interface typeDish {
  //   id: string;
  //   name: string;
  //   type: any;
  // }
  const [typeDish] = React.useState([
    {
      index: "1",
      name: "Món chính",
      type: MainDishData,
    },
    {
      index: "2",
      name: "Món phụ",
      type: SideDishData,
    },
    {
      index: "3",
      name: "Nước uống",
      type: DrinkData,
    },
  ]);

  return (
    <FlatList
      keyExtractor={(item) => item.index}
      data={typeDish}
      renderItem={({ item }) => (
        <View style={{ flex: 1 }}>
          <View style={{ padding: 15, backgroundColor: "#C4C4C4" }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              {item.name}
            </Text>
          </View>

          <FlatList
            keyExtractor={(item) => item.id}
            data={item.type}
            horizontal
            renderItem={({ item }) => (
              <View
                style={{
                  padding: 10,
                  alignItems: "center",
                }}
              >
                <ImageBackground source={item.image} style={styles.dish}>
                  <Image source={require("../assets/DiscountTag.png")}></Image>
                </ImageBackground>

                <Text style={{ textAlign: "center", width: "75%", height: 40 }}>
                  {item.name}
                </Text>
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

                <Text style={{ textAlign: "center" }}>{item.quantity}</Text>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity>
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
      )}
    />
  );
};

export default HomeFlatlist;

const styles = StyleSheet.create({
  dish: {
    width: 160,
    height: 160,
  },
});
