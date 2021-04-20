import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import AIcon from "react-native-vector-icons/AntDesign";
import CartModal from "./CartModal";

const RenderHomeFlatlist = (props: any) => {
  const item = props.data.item;

  const [quantity, setQuantity] = React.useState<number>(1);
  const [over, setOver] = React.useState(false);
  const [data, setData] = React.useState({});

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const minusQuantity = () => {
    setQuantity(quantity - 1);
  };

  const checkOver = () => {
    if (item.note == "Hết hàng") {
      setOver(true);
    }
  };

  const getItem = (
    namez: string,
    quanz: number,
    pricez: string,
    bePrice: string
  ) => {
    const newData = {
      id: makeid(7),
      name: namez,
      quantity: quanz,
      price: pricez,
      beforeDiscount: bePrice,
    };
    props.getData(newData);
    setData(newData);
  };

  const makeid = (length: number) => {
    var result = [];
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result.push(
        characters.charAt(Math.floor(Math.random() * charactersLength))
      );
    }
    return result.join("");
  };

  const [visible, setModal] = React.useState(false);
  const handleVisible = () => {
    setModal((prevState) => !prevState);
    setTimeout(() => {
      setModal((prevState) => !prevState);
    }, 1500);
  };

  React.useEffect(() => {
    checkOver();
  }, []);
  return (
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

      <Text style={{ textAlign: "center" }}>{item.note}</Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            if (quantity > 1) minusQuantity();
          }}
          disabled={over ? true : false}
        >
          <AIcon name="minussquareo" size={35}></AIcon>
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 17,
            paddingHorizontal: 15,
          }}
        >
          {quantity}
        </Text>
        <TouchableOpacity
          onPress={() => {
            addQuantity();
          }}
          disabled={over ? true : false}
        >
          <AIcon name="plussquareo" size={35}></AIcon>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: over ? "#B7B7B7" : "#421514",
          marginTop: 10,
          borderRadius: 5,
        }}
        disabled={over ? true : false}
        onPress={() => {
          handleVisible();
          props.cartClick(quantity);
          getItem(item.name, quantity, item.price, item.beforeDiscount);
          setQuantity(1);
        }}
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
      <CartModal data={visible} handleVisible={handleVisible} />
    </View>
  );
};

export default RenderHomeFlatlist;

const styles = StyleSheet.create({
  dish: {
    width: 160,
    height: 160,
  },
});
