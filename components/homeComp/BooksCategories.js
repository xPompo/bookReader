import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { Colors } from "../../constant/Colors";

export default function BooksCategories() {
  const DUMMY_TEXT = [
    { id: "1", name: "Fancy", icon: "*" },
    { id: "2", name: "action", icon: "*" },
    { id: "3", name: "drama", icon: "*" },
    { id: "4", name: "horror", icon: "*" },
    { id: "5", name: "cat1", icon: "*" },
    { id: "6", name: "cat2", icon: "*" },
  ];

  const [playingindex, setplayindex] = useState(0);
  const activeColorHandler = (idx) => {
    setplayindex(idx);
  };

  const render = ({ item, index }) => {
    return (
      <Pressable onPress={() => activeColorHandler(index)}>
        <View
          style={{
            ...styles.CategoryItemContainer,
            backgroundColor: playingindex === index ? Colors.BG : Colors.W,
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
    height: 100,
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
    borderWidth: 1.5,
    borderRadius: 5,
    marginHorizontal: 10,
    elevation: 4,
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
