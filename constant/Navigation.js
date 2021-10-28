import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import SearchBook from "../screens/SearchBook";
import BookDetails from "../screens/BookDetails";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import BookMark from "../screens/BookMark";

const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => {
              return (
                <View style={styles.tabIcon}>
                  <AntDesign name="home" size={22} color={color} />
                  <Text style={{ fontSize: 10, color: color }}>Home</Text>
                </View>
              );
            },
          }}
        />
        {/* <Tab.Screen
          name="details"
          component={BookDetails}
          options={{
            tabBarIcon: ({ color }) => {
              return <AntDesign name="home" size={22} color={color} />;
            },
          }}
        /> */}
        <Tab.Screen
          name="search"
          component={SearchBook}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color }) => {
              return (
                <View style={styles.tabIcon}>
                  <AntDesign name="search1" size={22} color={color} />
                  <Text style={{ fontSize: 10, color: color }}>Search</Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => {
              return (
                <View style={styles.tabIcon}>
                  <AntDesign name="user" size={22} color={color} />
                  <Text style={{ fontSize: 10, color: color }}>Profile</Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="bookmark"
          component={BookMark}
          options={{
            tabBarLabel: "Bookmark",
            tabBarIcon: ({ color }) => {
              return (
                <View style={styles.tabIcon}>
                  <Ionicons name="bookmark-outline" size={22} color={color} />
                  <Text style={{ fontSize: 10, color: color }}>Bookmark</Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  tabIcon: { justifyContent: "center", alignItems: "center" },
});
