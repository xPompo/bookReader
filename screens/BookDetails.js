import React, { useEffect, useState } from "react";
import { View, StyleSheet, StatusBar as StatusBarNative } from "react-native";
import { StatusBar } from "expo-status-bar";
import Banner from "../components/detailsComp/Banner";
import RatingBar from "../components/detailsComp/RatingBar";
import Description from "../components/detailsComp/Description";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

export default function BookDetails() {
  const book = useSelector((state) => state.reducer.bookItemDetail);
  const [bookDetails, setbookDetails] = useState([]);
  useEffect(() => {
    setbookDetails(book);
  }, [book]);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Banner bookDetails={bookDetails} />
        <RatingBar bookDetails={bookDetails} />
        <Description bookDetails={bookDetails} />
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
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBarNative.currentHeight : 0,
  },
});
