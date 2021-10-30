import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../../constant/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

export default function Description({ bookDetails, navigation }) {
  const [bookmarkActive, setBookmarkActive] = useState(false);
  const dispatch = useDispatch();

  const bookmarkHandler = () => {
    setBookmarkActive((prev) => !prev);
    if (!bookmarkActive) {
      dispatch({
        type: "SAVE_IN_BOOKMARK",
        payload: { favouritBook: bookDetails },
      });
    } else {
      dispatch({
        type: "REMOVE_FROM_BOOKMARK",
        payload: { favouritBook: bookDetails },
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.desContainer}>
        <Text style={styles.textMain}>Description :</Text>
        <Text style={styles.textSec}>{bookDetails.description}</Text>
      </View>
      <View style={styles.btnsContainer}>
        <Pressable onPress={bookmarkHandler}>
          <View
            style={{
              ...styles.btnBookMark,
              backgroundColor: bookmarkActive
                ? Colors.orange
                : Colors.grayWhite,
            }}
          >
            <Ionicons
              name={bookmarkActive ? "bookmark" : "bookmark-outline"}
              size={20}
              color={bookmarkActive ? Colors.grayWhite : Colors.orange}
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
