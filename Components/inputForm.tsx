import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
} from "react-native";

function InputForm() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TextInput placeholder="할 일을 작성해주세요." />
      <Pressable>
        <Text>+</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

export default InputForm;
