import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Colors } from "../../constant/Colors";

export default function BooksCategories() {
  const DUMMY_TEXT = [
    { id: "1", name: "fancy", icon: "*" },
    { id: "2", name: "action", icon: "*" },
    { id: "3", name: "drama", icon: "*" },
    { id: "4", name: "horror", icon: "*" },
  ];

  const render = ({ item, index }) => {
    return (
      <View style={styles.CategoryItemContainer}>
        <View style={styles.textContainer}>
          <Text>{item.icon}</Text>
          <Text>{item.name}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
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
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  CategoryItemContainer: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.gray,
    backgroundColor: Colors.W,
    borderWidth: 2,
    borderRadius: 8,
    marginHorizontal: 10,
    elevation: 4,
    shadowColor: Colors.grayDark,
  },
});
