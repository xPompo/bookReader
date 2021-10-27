import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Colors } from "../../constant/Colors";

export default function ReminderRead() {
  return (
    <View style={styles.container}>
      <View style={styles.reminderWrapper}>
        <Text style={styles.text}>
          Remimber,Text. You have an unfinished book since (July 30 ,2021)
        </Text>
        <Pressable
          onPress={() => {
            console.log("continue Reading");
          }}
        >
          <Text style={styles.button}>Continue Reading</Text>
        </Pressable>
      </View>
      <View style={styles.bookNameContainer}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRNJi9r9O8Wb9vEtFa2xdXWtxu-H250g9F8njpMthk1f5x_Z0k5Wm4x5qq4rEFAl4U6WI&usqp=CAU",
          }}
          style={styles.bookIcon}
        />
        <View>
          <Text style={styles.bookName}>harry Poter</Text>
          <Text style={styles.bookSeries}>Book (3) of (4)</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "90%",
    borderRadius: 10,
    backgroundColor: Colors.W,
    padding: 20,
    elevation: 10,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowColor: Colors.grayDark,
  },
  reminderWrapper: {
    backgroundColor: Colors.grayWhite,
    padding: 15,
  },
  text: {
    fontSize: 17,
    lineHeight: 25,
    color: Colors.grayDark,
    marginBottom: 10,
  },
  button: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.orange,
    textDecorationLine: "underline",
  },
  bookNameContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },
  bookIcon: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    borderRadius: 10,
    marginRight: 20,
  },
  bookName: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.B,
    textTransform: "capitalize",
  },
  bookSeries: {
    fontSize: 17,
    color: Colors.grayDark,
  },
});
