import BackButton from "@/components/BackButton";
import SubmitButton from "@/components/SubmitButton";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* Header Section */}
        <View style={styles.headerRow}>
          <BackButton onPress={() => router.replace("/")} />
          <Text style={styles.text1}>Hello!</Text>
          <View style={styles.placeHolder} />
        </View>

        <Text style={styles.text2}>Welcome</Text>

        {/* Email Section */}
        <Text style={styles.label}>Email:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            value={email}
            placeholder="example@example.com"
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#7a7a7a"
            style={styles.textInput}
          />
        </View>

        {/* Password Section */}
        <Text style={styles.label}>Password:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            value={password}
            secureTextEntry={!showPassword}
            placeholder="..............."
            onChangeText={setPassword}
            placeholderTextColor="#7a7a7a"
            style={[styles.textInput, { letterSpacing: 0.5 }]}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.iconContainer}
          >
            <Ionicons
              name={showPassword ? "eye" : "eye-off"}
              size={22}
              color="#7a3b83"
            />
          </TouchableOpacity>
        </View>

        {/* Forgot Password Link */}
        <View style={styles.forgotPasswordWrapper}>
          <Link href="/(auth)/ResetPassword" style={styles.forgotPasswordText}>
            Forgot Password?
          </Link>
        </View>

        <SubmitButton
          title="Log In"
          onPress={() => router.replace("/(tabs)/Home")}
        />
        <Text style={styles.orText}>or</Text>
        <Ionicons
          style={styles.icon}
          name="finger-print"
          size={30}
          color="#7a3b83"
        />

        <Text style={{ textAlign: "center", marginTop: 20 }} >
          Don't have an account? <Link style={{ color: "#7a3b83", fontWeight: "600" }} href="/(auth)/Register">Sign Up</Link>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
  },
  //Spacing between the back button, "Hello!" text, and the placeholder on the right to keep "Hello!" centered in the header
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  placeHolder: {
    width: 36,
    height: 36,
  },
  text1: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#7a3b83",
    textAlign: "center",
  },

  icon: {
    textAlign: "center",
    borderRadius: 100,
    backgroundColor: "#dfc4d6",
    padding: 12,
    alignSelf: "center",
    marginTop: 5,
  },

  // Controls the "or" text between the login button and the fingerprint icon, centering it and giving it some spacing from the elements above and below
  orText: {
    textAlign: "center",
    marginVertical: 10,
    color: "#0d0d0e",
    fontWeight: "600",
  },

  text2: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#7a3b83",
    textAlign: "left",
    marginTop: 20,
  },
  label: {
    marginTop: 20,
    letterSpacing: 0.5,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  // This container controls the box look and height
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    backgroundColor: "#dfc4d6",
    marginTop: 8,
    overflow: "hidden",
  },
  // Controls the email and password input text styling and spacing
  textInput: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#1a1a1a",
  },
  // Controls the eye icon container, ensuring it's properly spaced and centered vertically within the input box
  iconContainer: {
    paddingRight: 16,
    justifyContent: "center",
  },
  // Styles the "Forgot Password?" link, aligning it to the right and giving it some spacing from the password input
  forgotPasswordWrapper: {
    alignItems: "flex-end",
    marginTop: 10,
  },
  //Styles the "Forgot Password?" text, making it smaller and giving it a distinct color to indicate it's a link
  forgotPasswordText: {
    fontSize: 13,
    color: "#7a3b83",
    fontWeight: "600",
  },
});
