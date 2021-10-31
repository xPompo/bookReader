import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { Colors } from "../../constant/Colors";

export default function TopBooksSearch({ topBooksSearch }) {
  const render = ({ item, index }) => {
    return (
      <View style={styles.bookItemContainer}>
        <Image source={{ uri: item.book_image }} style={styles.img} />
        <View style={styles.textConatiner}>
          <Text style={styles.title}>
            {item.title.length > 10
              ? item.title.slice(0, 10) + "..."
              : item.title}
          </Text>
          <Text style={styles.author}>
            {" "}
            {item.author.length > 10
              ? item.author.slice(0, 10) + "..."
              : item.author}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.containerTopBooks}>
      <Text style={styles.titleHead}>Top Search Books</Text>
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={topBooksSearch}
        renderItem={render}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  containerTopBooks: {
    width: "85%",
    height: "60%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  titleHead: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    color: Colors.BG,
  },
  bookItemContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 10,
    width: "50%",
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 5,
    resizeMode: "cover",
  },
  textConatiner: {
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.BG,
    textTransform: "capitalize",
  },
  author: {
    fontSize: 14,
    color: Colors.grayDark,
    letterSpacing: 0.5,
  },
});
