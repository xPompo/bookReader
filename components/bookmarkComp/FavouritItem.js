import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Colors } from "../../constant/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

export default function FavouritItem({ item, navigation }) {
  const dispatch = useDispatch();

  const handleBackToDetailsScreen = () => {
    dispatch({ type: "BOOK_DETAILS", bookDetails: item });
    setTimeout(() => {
      navigation.navigate("navHome", { screen: "details" });
    }, 100);
  };

  const handleDeleteBookmark = () => {
    dispatch({ type: "REMOVE_FROM_BOOKMARK", payload: { favouritBook: item } });
  };

  return (
    <>
      <View style={styles.closeiconContainer}>
        <Pressable onPress={handleDeleteBookmark}>
          <AntDesign name="close" size={20} color={Colors.W} />
        </Pressable>
      </View>
      <View style={styles.containerFavItem}>
        <Image style={styles.img} source={{ uri: item.book_image }} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.author}>{item.author}</Text>
        </View>
        <Pressable onPress={handleBackToDetailsScreen}>
          <View style={styles.iconContainer}>
            <AntDesign name="arrowright" size={20} color={Colors.W} />
          </View>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerFavItem: {
    width: "90%",
    padding: 20,
    backgroundColor: Colors.grayWhite,
    elevation: 2,
    shadowColor: Colors.B,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  img: {
    width: "25%",
    height: 100,
    borderRadius: 5,
    resizeMode: "cover",
    marginRight: 10,
  },
  textContainer: {
    width: "65%",
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
  iconContainer: {
    backgroundColor: Colors.BG,
    padding: 5,
    borderRadius: 5,
  },
  closeiconContainer: {
    backgroundColor: Colors.orange,
    padding: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginTop: 10,
    width: "90%",
  },
});
