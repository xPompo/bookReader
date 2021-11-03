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
import SignImage from "../components/signupComp/SignImage";
import { Platform } from "expo-modules-core";
import { Colors } from "../constant/Colors";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { ScrollView } from "react-native-gesture-handler";

export default function Signup(props) {
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
        props.navigation.navigate("navHome", { screen: "home" });
      });
    });
  };

  const loginHnadler = () => {
    props.navigation.navigate("login");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Text style={styles.headertext}>Signup</Text>
          <SignImage />
        </View>
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
            <View style={styles.Formcontainer}>
              <SignupItemField
                handleChange={handleChange}
                handleBlur={handleBlur}
                label="Name"
                handle="name"
                placeholder="Your name"
                value={values.name}
              />
              {touched.name && errors.name && (
                <Text style={styles.err}>{errors.name}</Text>
              )}
              <SignupItemField
                handleChange={handleChange}
                handleBlur={handleBlur}
                label="Email"
                handle="email"
                placeholder="Your email id"
                value={values.email}
              />
              {touched.email && errors.email && (
                <Text style={styles.err}>{errors.email}</Text>
              )}
              <SignupItemField
                handleChange={handleChange}
                handleBlur={handleBlur}
                label="Password"
                handle="password"
                placeholder="Your password"
                value={values.password}
              />
              {touched.password && errors.password && (
                <Text style={styles.err}>{errors.password}</Text>
              )}
              <SignupItemField
                handleChange={handleChange}
                handleBlur={handleBlur}
                label="Confirm password"
                handle="confirmPassword"
                placeholder="Confirm your password"
                value={values.confirmPassword}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={styles.err}>{errors.confirmPassword}</Text>
              )}
              <TouchableOpacity onPress={handleSubmit} activeOpacity={0.5}>
                <View style={styles.ButtonContainer1}>
                  <Text style={styles.signUpButton}>Sign up</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
        <Text>Or</Text>
        <TouchableOpacity onPress={loginHnadler} activeOpacity={0.5}>
          <View style={styles.ButtonContainer2}>
            <Text style={styles.logInButton}>Login</Text>
          </View>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: Platform.OS === "android" ? NativeStatusBar.currentHeight : 0,
  },
  headertext: {
    fontSize: 35,
    fontWeight: "bold",
    color: Colors.BG,
    letterSpacing: 0.5,
  },
  Formcontainer: {
    width: "100%",
    alignItems: "center",
  },
  ButtonContainer1: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  ButtonContainer2: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  signUpButton: {
    width: 280,
    height: 45,
    borderRadius: 50,
    backgroundColor: Colors.BG,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
  },

  logInButton: {
    width: 280,
    height: 45,
    borderRadius: 50,
    backgroundColor: Colors.orange,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
  },
  err: {
    width: "90%",
    alignItems: "flex-start",
    paddingTop: 5,
    color: "red",
    fontSize: 12,
    letterSpacing: 0.5,
  },
});
