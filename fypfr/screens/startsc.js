//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Window from './Width';

// create a component
const StartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row',}}>
        <View style={styles.topLeft}></View>
        <View style={styles.topRight}></View>
      </View>
      <View style={styles.middle}>
        <Text style={styles.text}>Ride</Text>
        <Text style={styles.dot}>.</Text>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.push('Login')}>
          <Text style={styles.btntext}>Get Started</Text>
        </TouchableOpacity>
        <View style={styles.smallL}></View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18252D',
  },
  topLeft: {
    backgroundColor: '#63C7AB',
    width: Window.width / 2,
    height: Window.height / 3.8,
    borderBottomRightRadius: 150,
  },
  topRight: {
    backgroundColor: '#163031',
    width: Window.width / 2,
    height: Window.height / 3, // #163031
    borderBottomLeftRadius: 2000
  },
  middle:{
    height: Window.height/2.1,
    alignItems: 'center',
    // backgroundColor: '#f6f6f6',
    paddingLeft: 15,
    flexDirection: 'row',
  },
  text: {
    fontSize: Window.width / 3.8,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing:1,
  },
  dot:{
    color: Window.dark,
    fontSize:60,
    fontWeight: 'bold',
  },
  bottom: {
    width: Window.width,
    height: Window.height /4,
    backgroundColor: Window.dark,
    // borderTopLeftRadius: 100,
    borderTopRightRadius: 300,
    borderBottomRightRadius: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn:{
    backgroundColor: '#18252D',
    width:Window.width / 2.2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius:15,
  },
  btntext:{
    color: '#fff',
    fontSize: 18,
    letterSpacing:1,
  },
//   smallL:{
//     backgroundColor: 'Window.dark',
//     width:60,
//     height: 15,
//   }
});

// #18252D background

//make this component available to the app
export default StartScreen;
