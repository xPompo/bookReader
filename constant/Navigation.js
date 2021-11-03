import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign, Ionicons, Entypo, FontAwesome } from "@expo/vector-icons";
import SearchBook from "../screens/SearchBook";
import BookDetails from "../screens/BookDetails";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import BookMark from "../screens/BookMark";
import Signup from "../screens/Signup";
import { Colors } from "./Colors";
import "react-native-gesture-handler";
import Login from "../screens/Login";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export default function Navigation() {
  const navHome = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBarStyle,
          tabBarActiveTintColor: Colors.orange,
          tabBarInactiveTintColor: Colors.grayDark,
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        {/* //--Home--// */}
        <Tab.Screen
          name="home"
          options={({ navigation }) => ({
            tabBarIcon: ({ color }) => {
              return (
                <Pressable
                  onPress={() =>
                    navigation.navigate("navHome", { screen: "home" })
                  }
                >
                  <View style={styles.tabIcon}>
                    {color === Colors.orange && (
                      <Entypo name="home" size={22} color={color} />
                    )}
                    {color === Colors.grayDark && (
                      <AntDesign name="home" size={22} color={color} />
                    )}
                    <Text style={{ fontSize: 10, color: color }}>Home</Text>
                  </View>
                </Pressable>
              );
            },
          })}
        >
          {(props) => <Home {...props} />}
        </Tab.Screen>
        {/* //--Search--// */}
        <Tab.Screen
          name="search"
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
        >
          {(props) => <SearchBook {...props} />}
        </Tab.Screen>
        {/* //--Profile--// */}
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
        {/* //--Bookmark--// */}
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
    );
  };

  ///////////////////////////////////MainNavigation////////////////////////////////////
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          tabBarActiveTintColor: Colors.orange,
          tabBarInactiveTintColor: Colors.grayDark,
          headerShown: false,
          presentation: "modal",
        }}
      >
        {/* //--MainTabHome--// */}
        <Stack.Screen name="navHome" component={navHome} />
        {/* //--Details--// */}
        <Stack.Screen name="details" component={BookDetails} />
        {/* //--Signup--// */}
        <Stack.Screen name="signup" component={Signup} />
        {/* //--Login--// */}
        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

///////////////////// styles//////////////////////////////

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
