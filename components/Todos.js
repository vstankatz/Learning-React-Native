import React from 'react';
import {  StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Todos({item, pressHandler}) {
  return(
    /* passing the prop hook we made in App.js of pressHandler to the action onPress*/
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
    <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    textAlign: 'center',
  }
})
