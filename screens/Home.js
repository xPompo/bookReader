import React, { useEffect, useState } from "react";
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
  const API_LEY = "xSmRRimyfL7qUfuZXl0pro3MM3macGUW";
  const [bookList, setBookList] = useState([]);
  const [bookCategory, setBookCategory] = useState("hardcover-fiction");
  const [bookCategoryList, setBookCategoryList] = useState([]);
  useEffect(() => {
    getBooksApiData();
    getBooksCategories();
  }, [bookCategory]);

  const getBooksApiData = () => {
    try {
      fetch(
        `https://api.nytimes.com/svc/books/v3/lists/current/${bookCategory}.json?api-key=${API_LEY}`
      )
        .then((response) => response.json())
        .then((data) => setBookList(data.results.books));
    } catch (error) {
      console.log(error);
    }
  };

  const getBooksCategories = () => {
    try {
      fetch(
        `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API_LEY}`
      )
        .then((response) => response.json())
        .then((data) => setBookCategoryList(data.results));

      console.log("im ok");
    } catch (error) {
      console.log(error);
      console.log("Nooooooooooooooooooooo");
    }
  };
  console.log(bookCategoryList);
  return (
    <ScrollView>
      <View style={styles.container}>
        <WelcomeComp />
        <ReminderRead />
        <BooksCategories
          bookCategoryList={bookCategoryList}
          setBookCategory={setBookCategory}
        />
        <BooksList navigation={navigation} bookList={bookList} />
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
