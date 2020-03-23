import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Button, Image } from 'react-native';
import {globalStyles} from '../styles/global';


export default function Home({navigation}) {

  
  const [reviews, setReviews] = useState([
    { seriesCode: 'TNG', episodeTitle: 'first Contact', season: 4, episode: 1 , rating: 4.5, body: 'Riker is taken into a hospital on an alien world before first contact has been made, this is a great episode to see what can go wrong when bigotry and fear takeover.', key: 1 },
    { seriesCode: 'DS9', episodeTitle: 'The House of Quark', season: 3, episode: 3, rating: 4, body: 'Lies will get you nowhere, unless you\'re a ferengi! But guess what The Rules of Aquisition have to say about handling a fight to the death with a Klingon? Run. One of the first episodes we get to see Quark care about something other than latinum.', key: 2 },
    { seriesCode: 'TNG', episodeTitle: 'Elementary, Dear Data', season: 2, episode: 3, rating: 5, body: 'English teachers should praise this episode, not for its use of Sherlock Holmes but for its proof in how your choice of words matter. Watch Geordi make one slipup that almost costs the enterprise...', key: 3 },
    { seriesCode: 'VOY', episodeTitle: 'The 37\'s', season: 2, episode: 1, rating: 3, body: 'I\'m a sucker for Amelia Earhart so that\'s the only reason this gets rated hire. One year out the gate and the show had\'nt gotten it\'s stride yet and here it\'s like they try and prove the cast does\'nt want to leave.', key: 4 },
  ]);


  return (
    <View style={globalStyles.container}>
      <Text>????</Text>
      <Image
        style={styles.image}
        source={require("../assets/spine.png")}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("EngineRoom", item)}
          >
            <Text>{item.episodeTitle}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 220
  }
});