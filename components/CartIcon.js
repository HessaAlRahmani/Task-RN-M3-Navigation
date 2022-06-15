import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import cartStore from "../stores/cartStore";

export function CartIcon() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.container}>
        <Icon
          name="cart"
          size={15}
          style={styles.text}
          onPress={() => {
            navigation.navigate("Cart");
          }}
        >
          ({cartStore.getTotalPrice()})
        </Icon>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: "orange",
    // height: ,
    padding: 8,
    borderRadius: 32 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
