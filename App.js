import React from "react";
import Navigation from "./constant/Navigation";
import { reducer } from "./store/reducer";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";
import { getDatabase } from "firebase/database";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Setting a timer"]);
const rootReducer = combineReducers({ reducer });
const store = createStore(rootReducer);
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
