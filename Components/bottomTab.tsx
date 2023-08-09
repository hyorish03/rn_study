import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
}

function HomeScreen() {
  return <Text>Home</Text>;
}

function SearchScreen() {
  return <Text>Search</Text>;
}

function NotificationScreen() {
  return <Text>Notification</Text>;
}

function Bottom() {
  return (
    <>
      <View style={{ flexDirection: "row", height: "90%" }}>
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: "홈",
                tabBarIcon: ({ color, size }) => (
                  <Icon name="home" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Notification"
              component={SearchScreen}
              options={{
                title: "검색",
                tabBarIcon: ({ color, size }) => (
                  <Icon name="search" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Search"
              component={NotificationScreen}
              options={{
                title: "알림",
                tabBarIcon: ({ color, size }) => (
                  <Icon name="bell" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}

export default Bottom;
