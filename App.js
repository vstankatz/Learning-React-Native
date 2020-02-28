import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [color, setColor] = useState('red');
  const [name, setName] = useState('roni tsunami');

  const [person, setPerson] = useState({ name: 'Jazzy', age: 6})

  const pressHandler = () => {
    setName('Veronica');
    setPerson({ name: 'DJ Jazzy Jeff', age: 6});
  }

  const [choices, setChoices] = useState([
    {food: 'ice cream', key: '1'},
    {food: 'fries', key: '2'},
    {food: 'veggie burger', key: '3'},
    {food: 'milkshake', key: '4'},
    {food: 'onion rings', key: '5'},
  ])


  const touchHandler = (key) => {
    console.log(key);
    setChoices((prevChoices) => {
      return prevChoices.filter(choice => choice.key != key)
      console.log(prevChoices);
    })
  }
  return (
    <View style={styles.container}>
    <Text>Enter Name:</Text>
    <TextInput
    style={styles.textInput}
    placeholder='John Luc Picard'
    onChangeText={(name) => setName(name)}/>
    <Text>Enter Pets Name:</Text>
    <TextInput
    style={styles.textInput}
    placeholder='Muffins'
    onChangeText={(name) => setPerson(name)}/>
    <Text>Open up App.js to start working on your app!</Text>
    <Text style={styles.color}>Let's see how this goes {name}</Text>
    <Text style={styles.color}>My dogs name is {person.name} she is {person.age}</Text>
    <View style={styles.button}>
    <Button title='update name' onPress={pressHandler}/>
    </View>
    {/* create list with "flat list component" below...
    * key differences:
        - all the items don't automatically load onto the screen if its a large list, it will load when you scroll.
        - automatically looks for key property so you dont need to declare it. If you want to name it other than key(aka id) use the "keyExtractor"
          example : keyExtractor={(item) => item.id}
        -You can set up columns easily with "numColumns"
          example : numColumns={2}
    */}
    <FlatList
    numColumns={2}
    data={choices}
    renderItem={({ item }) => (
    <TouchableOpacity onPress={() => touchHandler(item.key)}>
    <Text style={styles.food}>{item.food}</Text>
    </TouchableOpacity>
    )}/>

  {/*  /Most basic way to generate a list is below...*/}

    {/* <ScrollView>
    // {choices.map((item) => {
    //   return (
    //     <View key={item.key}>
    //     <Text style={styles.food}>{item.food}</Text>
    //     </View>
    //   )
    // })}
    // </ScrollView>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    backgroundColor: 'red'
  },
  button: {
    marginTop: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    margin: 10,
    width: 200,
    textAlign: 'center',
  },
  food: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
  }
});
