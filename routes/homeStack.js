import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Details from '../screens/details';
import Header from '../shared/header';
import React from 'react';

const screens = {
  TheBridge: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Home" />
      };
    }
  },
  EngineRoom: {
    screen: Details,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Details" />
      };
    }
  }
};

// This uses stack Nagigation//
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerBackTitle: "Back",
    headerBackTitleStyle: {
      fontSize: 12,
    },
    headerStyle: {
      height: 60,
      backgroundColor: "rgba(252,70,107,1)"
    }
  }
});

export default createAppContainer(HomeStack)