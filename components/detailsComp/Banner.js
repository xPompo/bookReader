import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../../constant/Colors";
const { width } = Dimensions.get("window");
export default function Banner({ bookDetails, getDetails }) {
  return (
    <View style={styles.bannerContainer}>
      <View style={styles.BGImage}>
        <LinearGradient
          colors={[
            "rgba(255,255,255,1)",
            "rgba(255,255,255,.9)",
            "rgba(255,255,255,.8)",
            "rgba(255,255,255,.7)",
            "rgba(255,255,255,.6)",
            "rgba(255,255,255,.5)",
            "rgba(255,255,255,.6)",
            "rgba(255,255,255,.7)",
            "rgba(255,255,255,.8)",
            "rgba(255,255,255,.9)",
            "rgba(255,255,255,1)",
          ]}
          style={styles.overLay}
        />
        <Image style={styles.BG} source={{ uri: bookDetails.book_image }} />
      </View>
      <View style={styles.bannerContainer}>
        <Text style={styles.bookTitle}>{bookDetails.title}</Text>
        <View style={styles.bannerImageContainer}>
          <Image
            style={styles.bannerImage}
            source={{ uri: bookDetails.book_image }}
          />
        </View>
        <Text style={styles.bookAuthor}>Author: {bookDetails.author}</Text>
        {/* <Text style={styles.bookDescrition}>{bookDetails.description}</Text> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  BGImage: {
    width: "100%",
    height: 350,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -2,
    overflow: "hidden",
  },
  overLay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  BG: {
    width: "150%",
    height: "150%",
    resizeMode: "cover",
    zIndex: -1,
  },
  bannerContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  bookTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.B,
    textTransform: "capitalize",
    marginVertical: 20,
  },
  bannerImageContainer: {
    width: 150,
    height: 220,
    elevation: 15,
    shadowColor: "#000",
    shadowRadius: 10,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  bookAuthor: {
    width: width * 0.8,
    textAlign: "center",
    fontSize: 18,
    color: Colors.grayDark,
    fontWeight: "bold",

    marginTop: 10,
    marginBottom: 30,
    letterSpacing: 1,
  },
  bookDescrition: {
    width: width * 0.8,
    fontSize: 14,
    color: Colors.B,
    marginBottom: 20,
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 0.5,
  },
});
