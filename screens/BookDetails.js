import React, { useEffect, useState } from "react";
import { View, StyleSheet, StatusBar as StatusBarNative } from "react-native";
import { StatusBar } from "expo-status-bar";
import Banner from "../components/detailsComp/Banner";
import RatingBar from "../components/detailsComp/RatingBar";
import Description from "../components/detailsComp/Description";
import { useSelector } from "react-redux";
import ArrowButton from "../components/profileComp/ArrowButton";

export default function BookDetails(props) {
  const book = useSelector((state) => state.reducer.bookItemDetail);
  const [bookDetails, setbookDetails] = useState([]);
  useEffect(() => {
    setbookDetails(book);
  }, [book]);
  return (
    <View style={styles.container}>
      <ArrowButton navigation={props.navigation} />
      <Banner bookDetails={bookDetails} />
      <RatingBar bookDetails={bookDetails} />
      <Description bookDetails={bookDetails} />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBarNative.currentHeight : 0,
  },
});
