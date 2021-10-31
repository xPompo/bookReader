import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { Colors } from "../../constant/Colors";

export default function BooksCategories({ setBookCategory }) {
  const DUMMY_TEXT = [
    {
      id: "1",
      name: "Fiction",
      list_name_encoded: "hardcover-fiction",
    },
    {
      id: "2",
      name: "Novels",
      list_name_encoded: "paperback-nonfiction",
    },
    {
      id: "3",
      name: "Drama",
      list_name_encoded: "combined-print-and-e-book-fiction",
    },
    {
      id: "4",
      name: "Social",
      list_name_encoded: "paperback-nonfiction",
    },
  ];

  const [playingindex, setplayindex] = useState(0);
  const activeColorHandler = (idx) => {
    setplayindex(idx);
    setBookCategory(DUMMY_TEXT[idx].list_name_encoded);
  };

  const render = ({ item, index }) => {
    return (
      <Pressable onPress={() => activeColorHandler(index)}>
        <View
          style={{
            ...styles.CategoryItemContainer,
            backgroundColor: playingindex === index ? Colors.BG : Colors.W,
            elevation: playingindex === index ? 15 : 1,
          }}
        >
          <View style={styles.textContainer}>
            <Text
              style={{
                ...styles.name,
                color: playingindex === index ? Colors.W : Colors.grayDark,
              }}
            >
              {item.name}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={DUMMY_TEXT}
        renderItem={render}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.W,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  textContainer: {
    flexDirection: "row",
  },
  CategoryItemContainer: {
    width: 125,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 10,
    shadowColor: Colors.grayDark,
  },
  name: {
    fontSize: 18,
    color: Colors.grayDark,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
});
