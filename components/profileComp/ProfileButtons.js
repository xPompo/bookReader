import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../../constant/Colors";

export default function ProfileButtons({ icon, text }) {
  return (
    <View style={styles.mainContainer}>
      <Pressable onPress={() => console.log("hola")}>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <AntDesign name={icon} size={16} color={Colors.W} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{text}</Text>
          </View>
          <View style={styles.btnContainer}>
            <AntDesign name="arrowright" size={22} color={Colors.orange} />
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "rgba(252,234,242,.5)",
    borderRadius: 5,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 20,
  },
  iconContainer: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: Colors.orange,
    marginHorizontal: 10,
  },
  textContainer: {
    alignItems: "flex-start",
    width: "70%",
  },
  text: {
    fontSize: 16,
    color: Colors.grayDark,
    marginHorizontal: 10,
  },
  btnContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
});
