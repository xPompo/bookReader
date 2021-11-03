import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Colors } from "../../constant/Colors";

export default function SignupItemField({
  label,
  value,
  handle,
  handleChange,
  handleBlur,
  placeholder,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>

        <View style={styles.input}>
          <TextInput
            placeholder={placeholder}
            onChangeText={handleChange(handle)}
            onBlur={handleBlur(handle)}
            value={value}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  labelContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.BG,
    marginTop: 30,
    marginBottom: 2,
  },
  input: {
    width: "100%",
    borderColor: Colors.gray,
    borderBottomWidth: 1,
  },
});
