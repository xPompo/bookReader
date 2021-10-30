import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "../../constant/Colors";

export default function FavouritItem({ item }) {
  return (
    <View style={styles.containerFavItem}>
      <Image style={styles.img} source={{ uri: item.book_image }} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.author}>{item.author}</Text>
        <Text style={styles.author}>{">>"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerFavItem: {
    width: "100%",
    padding: 20,
    backgroundColor: Colors.grayWhite,
    elevation: 2,
    shadowColor: Colors.B,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderRadius: 5,
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  img: {
    width: 70,
    height: 100,
    borderRadius: 5,
    resizeMode: "cover",
    marginRight: 10,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.orange,
    textTransform: "capitalize",
  },

  author: {
    fontSize: 18,
    color: Colors.grayDark,
    textTransform: "capitalize",
  },
});
