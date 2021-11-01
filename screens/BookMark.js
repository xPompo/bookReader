import React from "react";
import {
  View,
  StyleSheet,
  StatusBar as StatusBarNative,
  FlatList,
  Text,
} from "react-native";
import LottieView from "lottie-react-native";
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
    <>
      {arrayFavouritBooks[0] ? (
        <View style={styles.container}>
          <View style={styles.headerContainerMain}>
            <Text style={styles.headerText}>Saved Books</Text>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={arrayFavouritBooks}
            renderItem={render}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Saved Books</Text>
          </View>
          <View style={styles.contentContainer}>
            <LottieView
              source={require("../assets/animations/bookmark.json")}
              autoPlay
              speed={0.7}
              style={{
                width: "100%",
                alignSelf: "center",
              }}
            />
            <Text style={styles.text}>No Saved Books</Text>
            <Text style={styles.subtext}>Just bookmark and read it later</Text>
          </View>
        </View>
      )}
      <StatusBar style="auto" />
    </>
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
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerContainerMain: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.orange,
    height: 65,
    elevation: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  headerContainer: {
    position: "absolute",
    top: 0,
    marginTop: Platform.OS === "android" ? StatusBarNative.currentHeight : 0,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.orange,
    height: 65,
    elevation: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: Colors.W,
  },
  text: {
    fontSize: 25,
    color: Colors.orange,
  },
  subtext: {
    fontSize: 15,
    color: Colors.gray,
  },
});
