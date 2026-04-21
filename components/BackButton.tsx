import { View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  onPress: () => void;
};

export default function BackButton({ onPress }: Props) {
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Ionicons name="chevron-back" size={25} color="#7a3b83" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "white",
    width: 36,
    height: 36,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
