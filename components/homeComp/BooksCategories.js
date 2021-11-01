import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { Colors } from "../../constant/Colors";

export default function BooksCategories({ setBookCategory, bookCategoryList }) {
  const [playingindex, setplayindex] = useState(0);
  const activeColorHandler = (idx) => {
    setplayindex(idx);
    setBookCategory(bookCategoryList[idx].list_name_encoded);

    console.log(bookCategoryList[idx].display_name.split(" ")[0]);
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
              {item.display_name.split(" ")[0] +
                " " +
                item.display_name.split(" ")[1]}
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
        data={bookCategoryList}
        renderItem={render}
        keyExtractor={(item, index) => index.toString()}
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
    width: 140,
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
    fontSize: 14,
    color: Colors.grayDark,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
});
