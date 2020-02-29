import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Home Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontFamily: 'handwriting-google',
    fontSize: 18,
  }
})