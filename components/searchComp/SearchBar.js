import React from "react";
import {
  TextInput,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { Colors } from "../../constant/Colors";
const { width } = Dimensions.get("window");

export default function SearchBar({ text, setText }) {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={40}
      style={styles.searchBarContainer}
    >
      <TextInput
        placeholder="Search titles, topics or authors"
        placeholderTextColor={Colors.grayDark}
        onChangeText={(text) => setText(text)}
        value={text}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: Colors.grayWhite,
    height: 55,
    width: width * 0.85,
    borderRadius: 5,
    marginTop: 20,
    paddingLeft: 20,
    borderColor: Colors.gray,
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
