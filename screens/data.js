import React, { useState, useEffect, Component } from "react";
import { StyleSheet, Text, FlatList,  AppState, View } from "react-native";
import { Accelerometer } from "expo-sensors";
import { ScreenOrientation } from 'expo';

const standardTen = -.111

export default class Data extends Component {
                 state = {
                   accelerometerData: {},
                   isAccelerometerAvailable: "checking",
                   screenOrientation: 'checking',
                   appState: AppState.currentState,
                 };

                 componentDidMount() {
                   this._toggle();
                   this.isAccelerometerAvailable();
                   this.isScreenOrientationAvailable();
                   AppState.addEventListener('change', this._handleAppState);
                  //  this.getOrientation();
                 }

                 componentWillUnmount() {
                   this._unsubscribe();
                   AppState.removeEventListener("change", this._handleAppState);

                 }

                 _handleAppState = nextAppState => {
                   if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
                   console.log('App is in the foreground');
                  }
                   this.setState({ appState: nextAppState})
                 };

                 _toggle = () => {
                   if (this._subscription) {
                     this._unsubscribe();
                   } else {
                     this._subscribe();
                   }
                 };

                 isAccelerometerAvailable() {
                   Accelerometer.isAvailableAsync().then(
                     result => {
                       this.setState({
                         isAccelerometerAvailable: String(result)
                       });
                     },
                     error => {
                       this.setState({
                         isAccelerometerAvailable:
                           "Could not get isAvailable: " + error
                       });
                     }
                   );
                 }

                 isScreenOrientationAvailable() {
                   ScreenOrientation.getOrientationAsync().then(
                     result => { 
                     
                       this.setState({
                         screenOrientation: String(result.orientation)
                       });
                     },
                     error => {
                       this.setState({
                         isScreenOrientationAvailable:
                           "Could not get screen orientation: " + error
                       });
                     }
                   );
                 }

                 _slow = () => {
                   Accelerometer.setUpdateInterval(1000);
                 };

                 _fast = () => {
                   Accelerometer.setUpdateInterval(16);
                 };

                 _subscribe = () => {
                   this._subscription = Accelerometer.addListener(
                     accelerometerData => {
                       this.setState({ accelerometerData });
                     }
                   );
                 };

                  getOrientation = () => {
                   ScreenOrientation.OrientationChangeListener().then(result => {
                     this.setState({
                       screenOrientation: String(result)
                     })
                    })
                 }

                 _unsubscribe = () => {
                   this._subscription && this._subscription.remove();
                   this._subscription = null;
                 };

                 render() {
                   let { x, y, z } = this.state.accelerometerData;
                   console.log(this.state.accelerometerData);
                   console.log(this.state.appState)

                   
                   
                   if (z < -0.7) {
                     const styles = StyleSheet.create({
                       color: {
                         backgroundColor: "black",
                         height: "100%",
                         width: "100%",
                         paddingTop: 20
                       },
                       font: {
                         color: "white"
                       }
                     });
                     return ( 
                       
                       <View style={styles.color}>
                         <Text style={styles.font}>
                           Accelerometer: (in Gs where 1 G = 9.81 m s^-2)
                         </Text>
                         <Text style={styles.font}>
                           x: {round(x)} y: {round(y)} z: {round(z)}
                         </Text>
                         <Text style={styles.font}>
                           Accelerometer status:{" "}
                           {this.state.isAccelerometerAvailable}
                         </Text>
                         <Text style={styles.font}>
                           Screen Orientation: {this.state.screenOrientation}
                         </Text>
                         {/* <FlatList 
                         data={this.state.accelerometerData}
                          renderItem={({ item }) => (
                         <Text style={styles.font}>
                           {item}
                         </Text>
                            
                          )}
                          /> */}
                       </View>
                     );
                   }
                   if (z < -0.58 && y < 0) {
                     const styles = StyleSheet.create({
                       color: {
                         backgroundColor: "red",
                         height: "100%",
                         width: "100%"
                       }
                     });

                     return (
                       <View style={styles.color}>
                         <Text>
                           Accelerometer: (in Gs where 1 G = 9.81 m s^-2)
                         </Text>
                         <Text>
                           x: {round(x)} y: {round(y)} z: {round(z)}
                         </Text>
                       </View>
                     );
                   }

                   if (z < -0.42 && y < 0) {
                     const styles = StyleSheet.create({
                       color: {
                         backgroundColor: "pink",
                         height: "100%",
                         width: "100%"
                       }
                     });

                     return (
                       <View style={styles.color}>
                         <Text>
                           Accelerometer: (in Gs where 1 G = 9.81 m s^-2)
                         </Text>
                         <Text>
                           x: {round(x)} y: {round(y)} z: {round(z)}
                         </Text>
                       </View>
                     );
                   }

                   if (z < -0.27 && y < 0) {
                     const styles = StyleSheet.create({
                       color: {
                         backgroundColor: "orange",
                         height: "100%",
                         width: "100%"
                       }
                     });

                     return (
                       <View style={styles.color}>
                         <Text>
                           Accelerometer: (in Gs where 1 G = 9.81 m s^-2)
                         </Text>
                         <Text>
                           x: {round(x)} y: {round(y)} z: {round(z)}
                         </Text>
                       </View>
                     );
                   }

                   if (z < 0.2 && y < 0) {
                     const styles = StyleSheet.create({
                       color: {
                         backgroundColor: "green",
                         height: "100%",
                         width: "100%"
                       }
                     });

                     return (
                       <View style={styles.color}>
                         <Text>
                           Accelerometer: (in Gs where 1 G = 9.81 m s^-2)
                         </Text>
                         <Text>
                           x: {round(x)} y: {round(y)} z: {round(z)}
                         </Text>
                       </View>
                     );
                   }
                   return (
                     <View>
                       <Text>
                         Accelerometer: (in Gs where 1 G = 9.81 m s^-2)
                       </Text>
                       <Text>
                         x: {round(x)} y: {round(y)} z: {round(z)}
                       </Text>
                     </View>
                   );
                 }
               }

function round(n) {
  if (!n) {
    return 0;
  }

  return Math.floor(n * 100) / 100;
}

