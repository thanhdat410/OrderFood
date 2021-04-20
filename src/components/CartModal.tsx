import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
interface cart {
  visible: boolean;
}

const CartModal = (props: any) => {
  const [isAccept, setAcceptvisible] = useState(false);
  const onAddclick = () => {
    setAcceptvisible(true);
  };

  // React.useEffect(() => {
  //   //console.log(props.data);
  //   setAcceptvisible(props.data);
  // }, []);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.data}
        onRequestClose={() => {
          setAcceptvisible(props.data);
        }}
      >
        <View style={styles.centeredView}>
          <View
            style={[styles.modalView, { flexDirection: "row", padding: 10 }]}
          >
            <Image source={require("../assets/Cart.png")}></Image>
            <Text>Sản phẩm đã được thêm vào giỏ hàng của bạn </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    width: 250,
    height: 40,
    position: "absolute",
    left: 50,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingVertical: 10,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default CartModal;
