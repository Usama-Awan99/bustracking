//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// importing local files
import Window from './screens/Width';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Dashboard from './screens/Dash';
import SearchScreen from './screens/chooseLocation';
import Route from './screens/directions';
import PickSeat from './screens/seatsavailable';
import BusAvailable from './screens/bus';
import MyDrawer from './screens/drawermenu';
import Start from './screens/startsc';

const Stack = createStackNavigator();

// create a component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{
          headerStyle: {
            backgroundColor: Window.dark,
          },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown:false,title: 'Select Service' }}
        /> */}
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            title: 'Select Address',
            headerStyle: { backgroundColor: Window.dark },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Route"
          component={Route}
          options={{ title: 'Route' }}
        />
        <Stack.Screen
          name="PickSeat"
          component={PickSeat}
          options={{ title: 'Available Seats' }}
        />
        <Stack.Screen
          name="BusAvailable"
          component={BusAvailable}
          options={{ title: 'Available Buses' }}
        />
        <Stack.Screen
          name="MyDrawer"
          component={MyDrawer}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
