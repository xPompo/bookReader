import React from "react";
import {
  View,
  StyleSheet,
  StatusBar as StatusBarNative,
  FlatList,
  Text,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import FavouritItem from "../components/bookmarkComp/FavouritItem";
import { useSelector } from "react-redux";
import { Colors } from "../constant/Colors";

export default function BookMark({ navigation }) {
  const arrayFavouritBooks = useSelector(
    (state) => state.reducer.favouritBooks
  );

  const render = ({ item, index }) => {
    return (
      <View style={styles.contentContainer}>
        <FavouritItem item={item} navigation={navigation} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Saved Books</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
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
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.orange,
    height: 65,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.W,
  },
});
