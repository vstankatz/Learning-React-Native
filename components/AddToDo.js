import React, {useState} from 'react';
import {  View, StyleSheet, Text, TextInput, Button } from 'react-native';

export default function AddToDo({submitHandler}) {

  const [text, setText] = useState('');

  const changeHandler = (typedText) => {
    setText(typedText)
  }


  return (
    <View>
    <TextInput
    style={styles.input}
    placeholder = 'new todo...'
    onChangeText={changeHandler}
    clearButtonMode='always'
    />
    <Button
    onPress={() => {
      submitHandler(text)
    }}
    title='add todo'
    color='coral'
    />
     </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'palegreen',
  }
})
