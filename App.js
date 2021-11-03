import React from "react";
import Navigation from "./constant/Navigation";
import { reducer } from "./store/reducer";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";

const rootReducer = combineReducers({ reducer });
const store = createStore(rootReducer);
const app = initializeApp(firebaseConfig);

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
