import React, { useEffect, useState } from "react";
import { View, StyleSheet, StatusBar as StatusBarNative } from "react-native";
import SearchBar from "../components/searchComp/SearchBar";
import SearchList from "../components/searchComp/SearchList";
import TopBooksSearch from "../components/searchComp/TopBooksSearch";
import TopAuthors from "../components/searchComp/TopAuthors";
import { StatusBar } from "expo-status-bar";

export default function SearchBook(props) {
  const API_LEY = "xSmRRimyfL7qUfuZXl0pro3MM3macGUW";
  const [text, setText] = useState("");
  // const [searchData, setSearchData] = useState([]);
  const [topBooksSearch, setTopBooksSearch] = useState([]);
  // const searchDataApi = () => {
  //   fetch(
  //     `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API_LEY}`
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setSearchData(data.results);
  //       console.log(data.results);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       console.log("hola eroor no code api");
  //     });
  // };
  const topBooksSearchApi = () => {
    fetch(
      `https://api.nytimes.com/svc/books/v3/lists/current/paperback-nonfiction.json?api-key=${API_LEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTopBooksSearch(data.results.books);
        console.log(data.results.books);
      })
      .catch((error) => {
        console.log(error);
        console.log("top Books Error");
      });
  };

  useEffect(() => {
    topBooksSearchApi();
    // searchDataApi();
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar text={text} setText={setText} />
      <SearchList
        navigation={props.navigation}
        text={text}
        topBooksSearch={topBooksSearch}
      />
      <TopBooksSearch topBooksSearch={topBooksSearch} />
      <TopAuthors topBooksSearch={topBooksSearch} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBarNative.currentHeight : 0,
  },
});
