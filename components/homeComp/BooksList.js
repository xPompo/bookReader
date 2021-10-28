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
const { width } = Dimensions.get("window");
const DUMMY_DATA = [
  {
    image:
      "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/7/30/1406719196162/b57b6007-afb1-4e3c-8263-b29f6534aee8-1360x2040.jpeg?width=700&quality=85&auto=format&fit=max&s=ac278c37a7564a3950831f264b08e215",
    title: "the Tittle of Book",
    auther: "auther Name",
    price: "15",
    rating: "4.5",
    key: "1",
  },
  {
    image:
      "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/7/30/1406719196162/b57b6007-afb1-4e3c-8263-b29f6534aee8-1360x2040.jpeg?width=700&quality=85&auto=format&fit=max&s=ac278c37a7564a3950831f264b08e215",
    title: "the Tittle of Book",
    auther: "auther Name",
    price: "15",
    rating: "4.5",
    key: "2",
  },
  {
    image:
      "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/7/30/1406719196162/b57b6007-afb1-4e3c-8263-b29f6534aee8-1360x2040.jpeg?width=700&quality=85&auto=format&fit=max&s=ac278c37a7564a3950831f264b08e215",
    title: "Tittle",
    auther: "auther Name",
    price: "15",
    rating: "4.5",
    key: "3",
  },
];
export default function BooksList({ navigation }) {
  const render = ({ item, index }) => {
    return (
      <View style={styles.bookItemContainer}>
        <View style={styles.rateContainer}>
          <AntDesign name="star" size={12} color={Colors.orange} />
          <Text style={styles.rateTextMain}>{item.rating}</Text>
          <Text style={styles.rateTextSec}> /5</Text>
        </View>
        <View style={styles.bookImageContainer}>
          <Image source={{ uri: item.image }} style={styles.bookImage} />
        </View>
        <Text style={styles.bookTitle}>
          {item.title.length > 12
            ? item.title.slice(0, 12) + "..."
            : item.title}
        </Text>
        <Text style={styles.bookAuther}>
          {" "}
          {item.auther.length > 12
            ? item.auther.slice(0, 12) + "..."
            : item.auther}
        </Text>
      </View>
    );
  };
  const getBookDetails = () => {
    navigation.navigate("navHome", { screen: "details" });
  };

  return (
    <Pressable onPress={getBookDetails}>
      <View style={styles.container}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DUMMY_DATA}
          keyExtractor={(item) => item.key}
          renderItem={render}
        />
      </View>
    </Pressable>
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
    height: "60%",
  },
  bookImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  bookTitle: {
    color: Colors.BG,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  bookAuther: {
    fontSize: 14,
    color: Colors.grayDark,
    textAlign: "center",
  },
});
