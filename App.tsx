import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Bottom from "./Components/bottomTab";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.pageTitle}>ToDo App</Text>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>할 일</Text>
      </View>
      <View style={styles.seperator} />
      <View style={styles.listView}>
        <Text style={styles.listTitle}>완료된 일</Text>
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
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  listView: {
    flex: 1,
  },
  listTitle: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 25,
    marginHorizontal: 10,
  },
  seperator: {
    marginHorizontal: 10,
    backgroundColor: "#bbb",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.2)",
    marginBottom: 10,
  },
});
