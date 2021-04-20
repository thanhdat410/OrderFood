import * as React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AIcon from "react-native-vector-icons/AntDesign";
import CartModal from "./CartModal";
import DrinkData from "./CategoryData/DrinkData";
import MainDishData from "./CategoryData/MainDishData";
import SideDishData from "./CategoryData/SideDishData";
import RenderHomeFlatlist from "./RenderHomeFlatlist";

const HomeFlatlist = (props: any) => {
  let numb: number = 0;

  // const [quantity, addQuantity] = React.useState(1);
  const [mainDish, setMain] = React.useState(MainDishData);
  const [sideDish, setSide] = React.useState(SideDishData);
  const [drink, setDrink] = React.useState(DrinkData);

  const [dish, setDish] = React.useState([{}]);

  const getType = (prop: string) => {
    let type = prop;
    return type;
  };

  const checkIndex = (arr: any[], id: any) => {
    return arr.findIndex((item) => item.id === id);
  };

  const handleCart = (a: number) => {
    props.fixCount(a);
    numb = props.getCount();
    console.log(numb);
    if (numb > 9) {
      props.fixSize();
    }
  };

  // const getData = (props: any) => {
  //   console.log(props);
  // };

  // const addQuantity = (item: any) => {
  //   let newQuantity = item.quantity + 1;
  //   const newItem = { ...item, quantity: newQuantity };

  //   let indexID = checkIndex(MainDishData, item.id);

  //   const newDish = [...guest];
  //   newGuest.splice(indexID, 1, newItem);
  //   // console.log(newGuest);
  //   setQuantity(newGuest);
  //   // console.log(guest);
  // };

  //   const renderItem: ListRenderItem<> = (item: any) => {
  //     return <RenderHomeFlatlist data={item} />;
  //  };

  const renderItem = (item: any) => {
    return (
      <RenderHomeFlatlist
        data={item}
        cartClick={handleCart}
        getData={props.getData}
        // setCount={props.setCount()}
        // setSize={props.setSize()}
        // getCount={props.getCount()}
      />
    );
  };

  interface typeDish {
    id: string;
    name: string;
    type: object;
  }
  const [typeDish] = React.useState([
    {
      index: "1",
      name: "Món chính",
      type: mainDish,
    },
    {
      index: "2",
      name: "Món phụ",
      type: sideDish,
    },
    {
      index: "3",
      name: "Nước uống",
      type: drink,
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
            renderItem={renderItem}
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
