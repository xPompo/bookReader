import React, { useEffect, useState } from "react";
import { View, StyleSheet, StatusBar as StatusBarNative } from "react-native";
import { StatusBar } from "expo-status-bar";
import Banner from "../components/detailsComp/Banner";
import RatingBar from "../components/detailsComp/RatingBar";
import Description from "../components/detailsComp/Description";
import { ScrollView } from "react-native-gesture-handler";

export default function BookDetails(props) {
  const API_LEY = "xSmRRimyfL7qUfuZXl0pro3MM3macGUW";
  const bookDetails = props.route.params.bookDetails;
  const authorId = bookDetails.author.replace(" ", "+");
  const [getDetails, setGetDetails] = useState([]);

  console.log(authorId);
  // useEffect(() => {
  //   getAuthorDetail();
  // }, [authorId]);

  // const getAuthorDetail = () => {
  //   try {
  //     fetch(
  //       `https://api.nytimes.com/svc/books/v3/reviews.json?author=${authorId}&api-key=${API_LEY}`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => setGetDetails(data.results));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Banner bookDetails={bookDetails} getDetails={getDetails} />
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
