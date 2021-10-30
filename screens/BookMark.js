import React from "react";
import {
  View,
  StyleSheet,
  StatusBar as StatusBarNative,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import FavouritItem from "../components/bookmarkComp/FavouritItem";
import { useSelector } from "react-redux";

export default function BookMark() {
  const arrayFavouritBooks = useSelector(
    (state) => state.reducer.favouritBooks
  );

  const render = ({ item, index }) => {
    return <FavouritItem item={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={arrayFavouritBooks}
        renderItem={render}
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBarNative.currentHeight : 0,
  },
  contentContainer: {
    width: "100%",
    height: "100%",
  },
});
