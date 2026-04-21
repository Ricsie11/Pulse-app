import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@/components/BackButton";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import SubmitButton from "@/components/SubmitButton";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <BackButton onPress={() => router.back()} />
        <Text style={styles.text1}>Set Password</Text>
        <View style={styles.placeHolder} />
      </View>

      <Text style={{ marginTop: 20, fontSize: 12 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        reprehenderit, fugiat corrupti esse eveniet assumenda facilis minima
        quam voluptates perspiciatis.
      </Text>

      {/* Space between lorem text and password input */}
      <View style={styles.placeHolder} />

      <Text style={styles.text2}>Password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          placeholder="Enter new password"
          placeholderTextColor="#7c4072"
          style={styles.input}
        />
        <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye" : "eye-off"}
            size={22}
            color="#7a3b83"
          />
        </TouchableOpacity>
      </View>

      {/* Space between password and confirm password inputs */}
      <View style={styles.placeHolder} />


      <Text style={styles.text2}>Confirm Password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showPassword}
          placeholder="Confirm new password"
          placeholderTextColor="#7c4072"
          style={styles.input}
        />
        <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye" : "eye-off"}
            size={22}
            color="#7a3b83"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.placeHolder} />
      <SubmitButton
      title="Create New Password"
      onPress={() => router.replace("/(auth)/Login")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
  },
  // Header row with back button on left, title centered, and placeholder on right to keep title truly centered
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  // Placeholder view with same dimensions as back button to keep title centered
  placeHolder: {
    width: 36,
    height: 36,
  },

  // Title text in header
  text1: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#7a3b83",
  },
  text2: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "#333",
  },
  input: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#dfc4d6",
    flex: 1
  },
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
  iconContainer: {
    paddingRight: 16,
    justifyContent: "center",
  },
});
