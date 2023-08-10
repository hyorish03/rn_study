import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";

function InputForm() {
  return (
    <KeyboardAvoidingView
      style={styles.addFormContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TextInput
        style={styles.inputField}
        placeholder="할 일을 작성해주세요."
      />
      <Pressable style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  addFormContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 20,
  },

  inputField: {
    flex: 1,
    height: 42,
    borderRadius: 4,
    padding: 5,
    marginRight: 25,
    borderWidth: 1,
    borderColor: "gray",
    color: "#000",
    fontSize: 15,
    backgroundColor: "white",
    textAlignVertical: "center",
  },

  addButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 4,
    backgroundColor: "rgba(0,0,0,0.7)",
    shadowColor: "#000",
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  addButtonText: {
    color: "#fff",
    fontSize: 30,
  },
});

export default InputForm;
