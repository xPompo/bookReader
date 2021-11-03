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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Signup(props) {
  const auth = getAuth();
  //   const user = auth.currentUser;
  const validation = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  const onLoginHandler = (values) => {
    const { email, password } = values;
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("User Logged In ");
        props.navigation.navigate("navHome", { screen: "home" });
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          alert("password is wrong, Please try again.");
        } else {
          alert("email id is Invaild, Please try again.");
        }
      });
  };

  const signUphandler = () => {
    props.navigation.navigate("signup");
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Text style={styles.headertext}>Login Now</Text>
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
          onLoginHandler(values);
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

            <TouchableOpacity onPress={handleSubmit} activeOpacity={0.5}>
              <View style={styles.ButtonContainer1}>
                <Text style={styles.logInButton}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <Text>Or</Text>
      <TouchableOpacity onPress={signUphandler} activeOpacity={0.5}>
        <View style={styles.ButtonContainer2}>
          <Text style={styles.signUpButton}>Sign up</Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
