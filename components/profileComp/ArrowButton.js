import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../../constant/Colors";

export default function ArrowButton({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={navigation.goBack}>
        <View style={styles.btnContainer}>
          <AntDesign name="arrowleft" size={22} color="black" />
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "90%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  btnContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 2,
    padding: 10,
    borderColor: Colors.orange,
    marginLeft: 10,
    marginTop: 20,
  },
});
