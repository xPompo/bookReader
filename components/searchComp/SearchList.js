import React from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { Colors } from "../../constant/Colors";

export default function SearchList({
  navigation,
  setText,
  topBooksSearch,
  text,
}) {
  const dispatch = useDispatch();
  const render = ({ item, index }) => {
    const handleClickList = () => {
      dispatch({ type: "BOOK_DETAILS", bookDetails: item });
      setText("");
      navigation.navigate("navHome", { screen: "details" });
    };

    return (
      <Pressable onPress={handleClickList}>
        <View style={styles.searchItemContainer}>
          <Text style={styles.searchText}>{item.title}</Text>
        </View>
      </Pressable>
    );
  };

  const newArray = topBooksSearch.filter((item) => {
    return item.title.toLowerCase().includes(text.toLowerCase());
  });
  return (
    <>
      {text.length !== 0 && (
        <View style={styles.searchListMain}>
          <FlatList
            data={newArray}
            renderItem={render}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  searchListMain: {
    position: "absolute",
    top: 100,
    zIndex: 1,
    width: "80%",
    backgroundColor: Colors.grayWhite,
    borderRadius: 10,
    paddingLeft: 20,
    marginTop: 10,
    paddingBottom: 20,
  },
  searchItemContainer: {
    marginTop: 20,
  },
  searchText: {
    fontSize: 14,
    color: Colors.grayDark,
  },
});
