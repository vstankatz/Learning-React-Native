import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";
import Header from "../shared/header";
import React from 'react';


const screens = {
  TenForward: {
    screen: About,
    navigationOptions: ({navigation}) => {
     return{
      headerTitle: () => <Header navigation={navigation} title='About'/>,   
      }
    }
  
  }
};

// This uses stack Nagigation//
const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "lightblue", height: 60 }
  }
});

export default AboutStack;
