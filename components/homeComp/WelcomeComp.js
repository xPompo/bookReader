import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "../../constant/Colors";

export default function WelcomeComp() {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Hello,TEXT</Text>
      <Text style={styles.subTittle}>Which books suits your current mood?</Text>

      <Image
        source={{
          uri: "https://img.freepik.com/free-vector/set-hand-drawn-book-doodle-elements_253081-8.jpg?size=626&ext=jpg",
        }}
        style={styles.BGImage}
      />
      <View style={styles.overLay}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    // height: 250,
    width: "95%",
    paddingTop: 40,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 10,
  },
  BGImage: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    opacity: 0.04,
    zIndex: -1,
    position: "absolute",
  },
  overLay: {
    backgroundColor: Colors.BG,
    width: "100%",
    height: 250,
    zIndex: -2,
    position: "absolute",
  },

  tittle: {
    color: Colors.W,
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 10,
  },
  subTittle: {
    color: Colors.gray,
    width: "65%",
    fontSize: 18,
    textAlign: "center",
    letterSpacing: 1,
    lineHeight: 20,
    marginBottom: 30,
  },
});
