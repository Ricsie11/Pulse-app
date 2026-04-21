import BackButton from "@/components/BackButton";
import SubmitButton from "@/components/SubmitButton";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section — back button on left, title centered, placeholder on right to keep title truly centered */}
        <View style={styles.headerRow}>
          <BackButton onPress={() => router.back()} />
          <Text style={styles.text1}>New Account</Text>
          <View style={styles.placeHolder} />
        </View>

        {/* Full Name Section */}
        <Text style={styles.label}>Full name:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            value={fullName}
            placeholder="John Doe"
            onChangeText={setFullName}
            autoCapitalize="words"
            placeholderTextColor="#7c4072"
            style={styles.textInput}
          />
        </View>

        {/* Email Section */}
        <Text style={styles.label}>Email:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            value={email}
            placeholder="example@example.com"
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#7c4072"
            style={styles.textInput}
          />
        </View>

        {/* Password Section — eye icon toggles secureTextEntry on and off */}
        <Text style={styles.label}>Password:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            value={password}
            secureTextEntry={!showPassword}
            placeholder="..............."
            onChangeText={setPassword}
            placeholderTextColor="#7c4072"
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

        {/* Phone Number Section */}
        <Text style={styles.label}>Mobile Number:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            value={number}
            placeholder="+234 800 000 0000"
            onChangeText={setNumber}
            keyboardType="phone-pad"
            placeholderTextColor="#7c4072"
            style={styles.textInput}
          />
        </View>

        {/* DOB Section — tapping opens the native date picker */}
        <Text style={styles.label}>Date Of Birth:</Text>
        <TouchableOpacity
          style={styles.inputContainer}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.textInput}>{date.toLocaleDateString()}</Text>
          {/* Calendar icon wrapped in a View so padding applies correctly */}
          <View style={styles.iconContainer}>
            <Ionicons name="calendar" size={20} color="#7a3b83" />
          </View>
        </TouchableOpacity>

        {/* Native date picker — only renders when showDatePicker is true */}
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            maximumDate={new Date()}
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) setDate(selectedDate);
            }}
          />
        )}

        {/* Terms and Privacy Policy links */}
        <Text style={styles.text3}>
          By continuing, you agree to{" "}
          <Link style={styles.termsText} href="/(auth)/Terms">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link style={styles.termsText} href="/(auth)/Privacy">
            Privacy Policy
          </Link>
        </Text>

        <SubmitButton
          title="Sign Up"
          onPress={() => router.replace("/(tabs)/Home")}
        />

        {/* OR divider between sign up button and fingerprint option */}
        <Text style={styles.orText}>or sign up with</Text>

        <View
          style={{ flexDirection: "row", justifyContent: "center", gap: 15 }}
        >
          {/* Google icon as an alternative sign up method */}
          <Ionicons
            name="logo-google"
            size={30}
            color="#7a3b83"
            style={styles.icon}
          />

          {/* Fingerprint icon as an alternative sign up method */}
          <Ionicons
            name="logo-facebook"
            size={30}
            color="#7a3b83"
            style={styles.icon}
          />

          {/* Fingerprint icon as an alternative sign up method */}
          <Ionicons
            style={styles.icon}
            name="finger-print"
            size={30}
            color="#7a3b83"
          />
        </View>


        <Text style={{ textAlign: "center", marginBottom: 20 }} >
          already have an account? <Link style={styles.termsText} href="/(auth)/Login">Log in</Link>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
  },

  // Spacing between the back button, title text, and the placeholder on the
  // right to keep the title centered in the header row
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },

  // Same size as BackButton so the header title stays perfectly centered
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

  // Fingerprint icon styled as a circular button centered on screen
  icon: {
    textAlign: "center",
    borderRadius: 100,
    backgroundColor: "#dfc4d6",
    padding: 12,
    alignSelf: "center",
    marginTop: 5,
    marginBottom: 30,
  },

  // "or sign up with" text between the submit button and fingerprint icon
  orText: {
    textAlign: "center",
    marginVertical: 10,
    color: "#0d0d0e",
    fontWeight: "600",
  },

  // Field labels above each input
  label: {
    marginTop: 15,
    letterSpacing: 0.5,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },

  // Controls the box look and height for all input fields
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    backgroundColor: "#dfc4d6",
    marginTop: 5,
  },

  // Controls the text input styling and internal spacing
  textInput: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#1a1a1a",
  },

  // Controls the eye and calendar icon containers — padded so icons
  // don't sit flush against the right edge of the input box
  iconContainer: {
    paddingRight: 16,
    paddingLeft: 8,
    justifyContent: "center",
  },

  // Styles the Terms of Use and Privacy Policy links
  termsText: {
    color: "#7a3b83",
    fontWeight: "600",
  },

  // Styles the terms text block with spacing and center alignment
  text3: {
    fontSize: 13,
    color: "#333",
    textAlign: "center",
    paddingVertical: 15,
  },
});
