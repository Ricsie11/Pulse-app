import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

type Props = {
    title: string;
    onPress: () => void;
}

export default function SubmitButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    text: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "bold",
        letterSpacing: 0.5,
    },
    button: {
        backgroundColor: "#a63db4",
        paddingVertical: 14,   
        paddingHorizontal: 40, 
        borderRadius: 100,
    
        alignSelf: "center", 
        minWidth: 150,         
        
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    }
})