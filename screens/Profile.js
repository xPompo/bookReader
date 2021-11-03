import React from "react";
import {
  View,
  StyleSheet,
  Platform,
  StatusBar as StatusBarNative,
  Linking,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import ArrowButton from "../components/profileComp/ArrowButton";
import ProfileInfo from "../components/profileComp/ProfileInfo";
import ProfileButtons from "../components/profileComp/ProfileButtons";
import { ScrollView } from "react-native-gesture-handler";
import { getAuth, signOut, deleteUser } from "@firebase/auth";

export default function Profile(props) {
  const google =
    "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjewbSi7PzzAhUooHIEHViRBqgQPAgI";
  const auth = getAuth();
  const CurrentUserName = auth.currentUser?.displayName;
  const onLogOut = () => {
    signOut(auth)
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        console.log("logOut is ok");
        props.navigation.navigate("login");
      });
  };
  const onRateUs = () => {
    Linking.openURL(google).catch((error) => {
      console.log(error);
      console.log("an error happen.");
    });
  };
  const deleteAccount = () => {
    deleteUser(auth.currentUser)
      .then(() => {
        console.log("user deleted");
        props.navigation.navigate("login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <ArrowButton navigation={props.navigation} />
        <ProfileInfo CurrentUserName={CurrentUserName} />
        <ProfileButtons
          onClick={() => console.log("hola")}
          text="Privicy&Settings"
          icon="home"
        />
        <ProfileButtons
          onClick={deleteAccount}
          text="Delete Your Account"
          icon="home"
        />
        <ProfileButtons
          onClick={onRateUs}
          text="Rate Us (google)"
          icon="home"
        />
        <ProfileButtons onClick={onLogOut} text="Log out" icon="home" />
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
