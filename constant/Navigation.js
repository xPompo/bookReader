import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import SearchBook from "../screens/SearchBook";
import BookDetails from "../screens/BookDetails";
import { AntDesign } from "@expo/vector-icons";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => {
              return <AntDesign name="home" size={22} color={color} />;
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
            tabBarIcon: ({ color }) => {
              return <AntDesign name="search1" size={22} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
