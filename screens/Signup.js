import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar as NativeStatusBar,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Yup from "yup";
import { Formik } from "formik";
import SignupItemField from "../components/signupComp/SignupItemField";
import { Platform } from "expo-modules-core";
import { Colors } from "../constant/Colors";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";

export default function Signup(props) {
  const dispatch = useDispatch();
  const auth = getAuth();
  const user = auth.currentUser;
  const validation = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const onSignUphandler = (values) => {
    const { email, password, name } = values;
    createUserWithEmailAndPassword(auth, email, password).then((userInfo) => {
      console.log("User created");
      updateProfile(userInfo.user, { displayName: name }).then(() => {
        console.log("Display Name is :  " + userInfo.user.displayName);
      });
    });
    dispatch({ type: "USER_NAME", userName: name });
    props.navigation.navigate("navHome", { screen: "home" });
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validation}
        onSubmit={(values, { resetForm }) => {
          onSignUphandler(values);
          resetForm({ values: "" });
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <SignupItemField
              handleChange={handleChange}
              handleBlur={handleBlur}
              label="Name"
              handle="name"
              value={values.name}
            />
            {touched.name && errors.name && <Text>{errors.name}</Text>}
            <SignupItemField
              handleChange={handleChange}
              handleBlur={handleBlur}
              label="Email"
              handle="email"
              value={values.email}
            />
            {touched.email && errors.email && <Text>{errors.email}</Text>}
            <SignupItemField
              handleChange={handleChange}
              handleBlur={handleBlur}
              label="password"
              handle="password"
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text>{errors.password}</Text>
            )}
            <SignupItemField
              handleChange={handleChange}
              handleBlur={handleBlur}
              label="confirm password"
              handle="confirmPassword"
              value={values.confirmPassword}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <Text>{errors.confirmPassword}</Text>
            )}
            <TouchableOpacity
              onPress={handleSubmit}
              disabled={
                !values.name ||
                !values.email ||
                !values.password ||
                !values.confirmPassword
              }
              activeOpacity={0.5}
            >
              <View style={styles.signUpButtonContainer}>
                <Text style={styles.signUpButton}>Sign up</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: Platform.OS === "android" ? NativeStatusBar.currentHeight : 0,
  },
  signUpButtonContainer: {
    width: 280,
    height: 45,
    borderRadius: 50,
    marginTop: 50,
    backgroundColor: Colors.orange,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpButton: {
    color: "white",
    fontWeight: "bold",
  },
});
