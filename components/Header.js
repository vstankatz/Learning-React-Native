import React from 'react';
import {  StyleSheet, Text, View, } from 'react-native';

export default function Header() {
  return(
    <View style={styles.header}>
    <Text style={styles.title}>My Todos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    paddingTop: 38,
    backgroundColor: 'coral',
    width: '100%',
  },
  title: {
    marginTop: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  }
})
