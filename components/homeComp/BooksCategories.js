import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BooksCategories() {
  return (
    <View style={styles.container}>
      <Text>BooksCat</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { backgroundColor: "red", width: "100%", height: 200 },
});
