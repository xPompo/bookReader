import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./constant/Navigation";
import { reducer } from "./store/reducer";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
const rootReducer = combineReducers({ reducer });
const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
