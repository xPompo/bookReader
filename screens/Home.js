import React from "react";
import {
  View,
  StyleSheet,
  Platform,
  StatusBar as StatusBarNative,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import BooksCategories from "../components/homeComp/BooksCategories";
import ReminderRead from "../components/homeComp/ReminderRead";
import WelcomeComp from "../components/homeComp/WelcomeComp";
import BooksList from "../components/homeComp/BooksList";

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <WelcomeComp />
        <ReminderRead />
        <BooksCategories />
        <BooksList navigation={navigation} />
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBarNative.currentHeight : 0,
  },
});
