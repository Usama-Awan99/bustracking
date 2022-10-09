//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import Window from './Width';

// create a component
const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: Window.dark }}
      >
        <View>
          <FontAwesome5
            style={styles.user}
            name="user-circle"
            size={80}
            color="#f6f6f6"
          />
          <Text style={styles.uname}>Jhon Doe</Text>
          <Text style={styles.nmb}>+923484950841</Text>
        </View>
        <View style={{paddingTop: 10,flex: 1, backgroundColor:'#fff'}}>
          <DrawerItemList {...props}  />
        </View>
      </DrawerContentScrollView>
      <View>
        <Text>Our Custom Text</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  user: {
    alignSelf: 'center',
  },
  uname: {
    fontSize: 26,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#f6f6f6',
    marginBottom: 5,
  },
  nmb: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
    alignSelf: 'center',
    color: '#f6f6f6',
  },
});

//make this component available to the app
export default CustomDrawer;
