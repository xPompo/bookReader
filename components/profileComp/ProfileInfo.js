import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "../../constant/Colors";

export default function ProfileInfo({ CurrentUserName }) {
  return (
    <View style={styles.profileInfoContainer}>
      <Image
        source={{
          uri: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
        }}
        style={styles.img}
      />
      <Text style={styles.name}>{"Welcome," + CurrentUserName}</Text>
      <Text style={styles.readerRange}>Mid Reading</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profileInfoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 140,
    height: 140,
    borderRadius: 50,
    marginTop: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
    color: Colors.orange,
  },
  readerRange: {
    fontSize: 15,
    color: Colors.gray,
    letterSpacing: 0.5,
  },
});
