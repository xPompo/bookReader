import React from "react";
import {
  View,
  StyleSheet,
  Platform,
  StatusBar as StatusBarNative,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import ArrowButton from "../components/profileComp/ArrowButton";
import ProfileInfo from "../components/profileComp/ProfileInfo";
import ProfileButtons from "../components/profileComp/ProfileButtons";
import { ScrollView } from "react-native-gesture-handler";

export default function Profile(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ArrowButton navigation={props.navigation} />
        <ProfileInfo />
        <ProfileButtons text="Privicy&Settings" icon="home" />
        <ProfileButtons text="Reading Books" icon="home" />
        <ProfileButtons text="Rate Us" icon="home" />
        <ProfileButtons text="Log out" icon="home" />
        <StatusBar style="auto" />
      </View>
    </ScrollView>
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
