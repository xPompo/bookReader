import React from "react";
import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";
import BooksCategories from "../components/homeComp/BooksCategories";
import ReminderRead from "../components/homeComp/ReminderRead";
import WelcomeComp from "../components/homeComp/WelcomeComp";

export default function Home() {
  return (
    <View style={styles.container}>
      <WelcomeComp />
      <ReminderRead />
      <BooksCategories />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
