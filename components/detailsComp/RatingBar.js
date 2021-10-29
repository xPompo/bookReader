import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constant/Colors";
import { AntDesign } from "@expo/vector-icons";

export default function RatingBar() {
  return (
    <View style={styles.ratingBarContainer}>
      <View style={styles.row}>
        <AntDesign name="star" size={16} color="orange" />
        <Text style={styles.textMain}>4.8</Text>
        <Text style={styles.textSec}>/5</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textMain}>4.2K</Text>
        <Text style={styles.textSec}>Read</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textMain}>340</Text>
        <Text style={styles.textSec}>Pages</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  ratingBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: Colors.grayWhite,
    borderRadius: 5,
    width: "80%",
  },
  row: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textMain: {
    color: Colors.B,
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 5,
  },
  textSec: {
    color: Colors.gray,
    fontSize: 12,
  },
});
