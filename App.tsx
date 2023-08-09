import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Bottom from "./Components/bottomTab";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.pageTitle}>ToDo App</Text>
      <View>
        <Text style={styles.listView}>할 일</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 20 : 0,
    flex: 1,
    backgroundColor: "#f7f",
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  listView: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
