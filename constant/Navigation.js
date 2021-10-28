import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchBook from "../screens/SearchBook";
import BookDetails from "../screens/BookDetails";
import { AntDesign, Ionicons, Entypo, FontAwesome } from "@expo/vector-icons";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import BookMark from "../screens/BookMark";
import "react-native-gesture-handler";
import { Colors } from "./Colors";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export default function Navigation() {
  const navHome = () => {
    return (
      <Stack.Navigator
        initialRouteName="home"
        activeColor="red"
        screenOptions={{
          tabBarActiveTintColor: Colors.orange,
          tabBarInactiveTintColor: Colors.grayDark,
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="details" component={BookDetails} />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="navHome"
        screenOptions={{
          tabBarStyle: styles.tabBarStyle,
          tabBarActiveTintColor: Colors.orange,
          tabBarInactiveTintColor: Colors.grayDark,
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="navHome"
          component={navHome}
          options={{
            tabBarIcon: ({ color }) => {
              console.log(color + " hola");
              return (
                <View style={styles.tabIcon}>
                  {color === Colors.orange && (
                    <Entypo name="home" size={22} color={color} />
                  )}
                  {color === Colors.grayDark && (
                    <AntDesign name="home" size={22} color={color} />
                  )}
                  <Text style={{ fontSize: 10, color: color }}>Home</Text>
                </View>
              );
            },
          }}
        />

        <Tab.Screen
          name="search"
          component={SearchBook}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color }) => {
              return (
                <View style={styles.tabIcon}>
                  {color === Colors.grayDark && (
                    <AntDesign name="search1" size={22} color={color} />
                  )}
                  {color === Colors.orange && (
                    <FontAwesome name="search" size={22} color={color} />
                  )}
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
                  {color === Colors.grayDark && (
                    <AntDesign name="user" size={22} color={color} />
                  )}
                  {color === Colors.orange && (
                    <FontAwesome name="user" size={22} color={color} />
                  )}
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
                  {color === Colors.grayDark && (
                    <Ionicons name="bookmark-outline" size={22} color={color} />
                  )}
                  {color === Colors.orange && (
                    <Ionicons name="bookmark" size={22} color={color} />
                  )}
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
  tabBarStyle: {
    height: 70,
    paddingHorizontal: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.grayWhite,
  },
});
