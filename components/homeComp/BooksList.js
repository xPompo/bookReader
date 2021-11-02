import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../../constant/Colors";
import { useDispatch } from "react-redux";
const { width } = Dimensions.get("window");

export default function BooksList({ navigation, bookList }) {
  const dispatch = useDispatch();
  const getBookDetails = (bookDetails) => {
    dispatch({ type: "BOOK_DETAILS", bookDetails });
    navigation.navigate("details");
  };

  const render = ({ item, index }) => {
    return (
      <Pressable onPress={() => getBookDetails(item)}>
        <View style={styles.bookItemContainer}>
          <View style={styles.rateContainer}>
            <AntDesign name="star" size={12} color={Colors.orange} />
            <Text style={styles.rateTextMain}>4.8</Text>
            <Text style={styles.rateTextSec}> /5</Text>
          </View>
          <View style={styles.bookImageContainer}>
            <Image source={{ uri: item.book_image }} style={styles.bookImage} />
          </View>
          <Text style={styles.bookTitle}>
            {item.title.length > 12
              ? item.title.slice(0, 12) + "..."
              : item.title}
          </Text>
          <Text style={styles.bookAuther}>
            {" "}
            {item.author.length > 12
              ? item.author.slice(0, 12) + "..."
              : item.author}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        bounces={true}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={bookList}
        keyExtractor={(item) => item.title}
        renderItem={render}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    justifyContent: "center",
    alignItems: "center",
  },

  bookItemContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 10,
    width: width * 0.3,
    height: 280,
  },
  rateContainer: {
    position: "absolute",
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: 10,
    left: 10,
    backgroundColor: Colors.W,
    borderRadius: 20,
    width: 65,
    height: 25,
  },
  rateTextMain: {
    fontSize: 14,
    color: Colors.B,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  rateTextSec: {
    fontSize: 10,
    color: Colors.grayDark,
    letterSpacing: 0.5,
  },
  bookImageContainer: {
    width: "100%",
    height: "75%",
  },
  bookImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  bookTitle: {
    color: Colors.BG,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
    textTransform: "capitalize",
  },
  bookAuther: {
    fontSize: 14,
    color: Colors.grayDark,
    textAlign: "center",
  },
});
