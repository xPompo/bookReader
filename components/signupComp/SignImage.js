import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function SignImage() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://img.freepik.com/free-vector/online-registration-sign-up-concept-with-man-character_268404-98.jpg?size=626&ext=jpg",
        }}
        style={styles.img}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 200,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
