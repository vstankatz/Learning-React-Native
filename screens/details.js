import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Keyboard, Button } from 'react-native';
import {globalStyles} from '../styles/global';

export default function Details({navigation}) {



  return (
    <View style={globalStyles.container}>
      <Text>{navigation.getParam("seriesCode")}</Text>
      <Text>{navigation.getParam("episodeTitle")}</Text>
      <Text>
        season. 
        {navigation.getParam("season")}, ep.{navigation.getParam("season")}
      </Text>
      <Text>{navigation.getParam("rating")}</Text>
      <Text>{navigation.getParam("body")}</Text>
    </View>
  );
}
