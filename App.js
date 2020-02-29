import React, { useState } from 'react';
import { Alert, FlatList, ScrollView, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';


export default function App() {
  const[todos, setTodos] = useState([
    {text: 'get groceries', key: '1'},
    {text: 'walk dog', key: '2'},
    {text: 'sleep', key: '3'},
    {text: 'eat', key: '4'},
  ])
  /* this removes a todo from the list when pressed by filtering it from the array*/
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text, setText) => {

    if(text.length > 2) {
      setTodos((prevTodos) => {
        return [
          /* Ideally never use Math.random to give a key/id value, download another library to handle this*/
          {text: text, key: Math.random().toString() },
          ...prevTodos
        ]
      })
    } else {
      Alert.alert('OOOPS!', 'Todos must be more than 3 chars long', [
        {text:'Gotcha'}
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
    <Header/>
    <View style={styles.content}>
    <AddToDo submitHandler={submitHandler}/>
    <View style={styles.list}>
    <FlatList
    data={todos}
    renderItem={({item}) => (
      <Todos item={item} pressHandler={pressHandler}/>
    )}
    />
    </View>
    </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 40,
    // backgroundColor: 'lightblue',
    flex: 1,
  },
  list: {
    marginTop: 20,
    // backgroundColor: 'pink',
    flex: 1,
  }
});
