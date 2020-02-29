import React from 'react';
import {  StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons} from '@expo/vector-icons';

export default function Todos({item, pressHandler}) {
  return(
    /* passing the prop hook we made in App.js of pressHandler to the action onPress*/
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
    <View style={styles.item}>
    <MaterialIcons name='delete' size={18} color='#3356'/>
    <Text style={styles.text}>{item.text}</Text>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    textAlign: 'center',
  },
  text: {
    marginLeft: 10,
  }
})
