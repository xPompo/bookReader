import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { Colors } from "../../constant/Colors";

export default function TopAuthors({ topBooksSearch }) {
  const render = ({ item, index }) => {
    return (
      <View style={styles.bookItemContainer}>
        <Image
          source={{
            uri: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
          }}
          style={{ width: 80, height: 80 }}
        />
        <Text style={styles.author}>
          {item.author.length > 15
            ? item.author.slice(0, 15) + "..."
            : item.author}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.containerTopBooks}>
      <Text style={styles.titleHead}>Top Authors</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
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

    justifyContent: "center",
    alignItems: "flex-start",
  },
  titleHead: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    color: Colors.orange,
  },
  bookItemContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 10,
  },
  author: {
    fontSize: 14,
    color: Colors.BG,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
});
