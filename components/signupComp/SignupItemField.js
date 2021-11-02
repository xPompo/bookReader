import React from "react";
import { Text, TextInput } from "react-native";

export default function SignupItemField({
  label,
  value,
  handle,
  handleChange,
  handleBlur,
}) {
  return (
    <>
      <Text>{label}</Text>
      <TextInput
        onChangeText={handleChange(handle)}
        onBlur={handleBlur(handle)}
        value={value}
      />
    </>
  );
}
