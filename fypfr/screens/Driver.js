//import liraries
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { AntDesign,MaterialCommunityIcons } from '@expo/vector-icons';
import Window from './Width';

// create a component
const DriverMode = () => {
  // Routes Array
  let [routes, setRoutes] = useState([
    {
      start: 'Tramri',
      end: 'Faizabad',
      time: '8:00',
    },
    {
      start: 'G9',
      end: 'Blue Area',
      time: '10:00',
    },
    {
      start: 'Khanna Pull',
      end: 'Faizabad',
      time: '12:00',
    },
    {
      start: 'G9',
      end: 'Blue Area',
      time: '10:00',
    },
    {
      start: 'Khanna Pull',
      end: 'Faizabad',
      time: '12:00',
    },
  ]);

  let [booked, setbooked] = useState([]);

  const bookroute = (route, index) => {
    let newArr = routes.filter((el, i) => i != index);
    booked = [route, ...booked];
    setbooked(booked);
    setRoutes([...newArr]);
    // console.log('booked Array', booked);
    // console.log('');
    // console.log('routes array: ', routes);
  };

  const deleteroute = (route, index) => {
    let newArr = booked.filter((el, i) => i != index);
    routes = [route, ...routes];
    setRoutes(routes);
    setbooked([...newArr]);
    // console.log('booked Array', booked);
    // console.log('');
    // console.log('routes array: ', routes);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Available Routes</Text>
      <ScrollView style={{ flex: 0.4, backgroundColor: '#fff' }}>
        {routes.map((el, id) => (
          <View key={id} style={styles.routes}>
            <Text style={styles.from}>{el.start}</Text>
            <Text>____To____</Text>
            <Text style={styles.to}>{el.end}</Text>
            <Text style={styles.time}>{el.time}</Text>
            <TouchableOpacity onPress={() => bookroute(el, id)}>
              <AntDesign name="pluscircle" size={22} color={Window.dark} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <Text style={styles.head}>Booked Routes</Text>
      <ScrollView style={{ flex: 0.4, backgroundColor: '#fff' }}>
        {booked.map((el, id) => (
          <View key={id} style={styles.routes}>
            <Text style={styles.from}>{el.start}</Text>
            <Text>____To____</Text>
            <Text style={styles.to}>{el.end}</Text>
            <Text style={styles.time}>{el.time}</Text>
            <TouchableOpacity onPress={() => deleteroute(el, id)}>
            <MaterialCommunityIcons name="delete-circle" size={24} color={Window.dark} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingLeft:10,
    // paddingRight: 15,
  },
  head: {
    fontSize: 25,
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 10,
    color: Window.dark,
    fontWeight: 'bold',
  },
  routes: {
    flexDirection: 'row',
    marginLeft: 20,
    width: Window.width / 1.1,
    backgroundColor: '#f6f6f6',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    elevation: 5,
    borderRadius: 10,
    marginBottom: 5,
    marginTop: 5,
  },
});

//make this component available to the app
export default DriverMode;
