import React from "react";
import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";
import ReminderRead from "../components/homeComp/ReminderRead";
import WelcomeComp from "../components/homeComp/WelcomeComp";

export default function Home() {
  return (
    <View style={styles.container}>
      <WelcomeComp />
      <View style={styles.wrapperReminder}>
        <ReminderRead />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  wrapperReminder: {
    position: "absolute",
    top: 200,
    zIndex: 2,
    width: "100%",

    justifyContent: "center",
    alignItems: "center",
  },
});
