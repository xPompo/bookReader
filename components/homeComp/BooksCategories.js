import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { Colors } from "../../constant/Colors";

export default function BooksCategories({ setBookCategory }) {
  const DUMMY_TEXT = [
    {
      id: "1",
      name: "fiction",
      list_name_encoded: "hardcover-fiction",
      icon: "*",
    },
    {
      id: "2",
      name: "non-fiction",
      list_name_encoded: "paperback-nonfiction",
      icon: "*",
    },
    {
      id: "3",
      name: "fiction",
      list_name_encoded: "combined-print-and-e-book-fiction",
      icon: "*",
    },
    {
      id: "4",
      name: "non-fiction",
      list_name_encoded: "paperback-nonfiction",
      icon: "*",
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
            <Text style={styles.icon}>{item.icon}</Text>
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
  icon: {
    marginRight: 10,
    fontSize: 20,
    color: Colors.gray,
  },
  name: {
    fontSize: 18,
    color: Colors.grayDark,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
});
