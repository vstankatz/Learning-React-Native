import { createStackNavigator } from "react-navigation-stack";
import Gyroscope from "../screens/data";
import Header from "../shared/header";
import React from "react";

const screens = {
  HoloDeck: {
    screen: Gyroscope,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Gyroscope" />
      };
    }
  }
};

// This uses stack Nagigation//
const GyroStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "lightblue", height: 60 }
  }
});

export default GyroStack;
