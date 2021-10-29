import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../../constant/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function Description({ bookDetails }) {
  const [bookmarkActive, setBookmarkActive] = useState(false);

  const bookmarkHandler = () => {
    setBookmarkActive((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.desContainer}>
        <Text style={styles.textMain}>Description :</Text>
        <Text style={styles.textSec}>{bookDetails.description}</Text>
      </View>
      <View style={styles.btnsContainer}>
        <Pressable onPress={bookmarkHandler}>
          <View style={styles.btnBookMark}>
            <Ionicons
              name={bookmarkActive ? "bookmark" : "bookmark-outline"}
              size={20}
              color={Colors.orange}
            />
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.btnReadContainer}>
            <Text style={styles.btnRead}>Start Reading</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  desContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
  },
  textMain: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.BG,
    marginBottom: 5,
    letterSpacing: 0.3,
  },
  textSec: {
    fontSize: 15,
    color: Colors.grayDark,
    letterSpacing: 0.5,
    lineHeight: 20,
    marginBottom: 10,
  },
  btnsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  btnBookMark: {
    backgroundColor: Colors.grayWhite,
    borderRadius: 5,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  btnReadContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 170,
    height: 60,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: Colors.BG,
  },
  btnRead: {
    fontSize: 15,
    color: Colors.W,
    letterSpacing: 0.5,
    textAlign: "center",
    padding: 10,
    borderRadius: 5,
  },
});
