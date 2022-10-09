//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Window from './Width';
import { FontAwesome5 } from '@expo/vector-icons';

// create a component
const Dashboard = ({ navigation }) => {
  const [state, setState] = useState({
    pickupCords: {
      latitude: 32.5162,
      longitude: 74.5639,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    droplocationCords: {
      latitude: 32.6724,
      longitude: 74.4644,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });

  // const GOOGLE_MAPS_APIKEY = 'AIzaSyB7cfGUlwFvp4yQXb783fbRCySxiKflMcg';

  const { pickupCords, droplocationCords } = state;
  // console.log(pickupCords, droplocationCords);
  

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.9 }}>
        <MapView style={StyleSheet.absoluteFill} initialRegion={pickupCords}>
          {/* <Marker coordinate={pickupCords} />
        <Marker coordinate={droplocationCords} />
        <MapViewDirections
          origin={pickupCords}
          destination={droplocationCords}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={5}
          strokeColor="hotpink"
        /> */}
        </MapView>
      </View>
      <View style={styles.btm}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SearchScreen')}
          style={styles.btn}
        >
          <FontAwesome5 name="bus" size={24} color="#f6f6f6" />
          <Text style={styles.btnTxt}>Bus</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SearchScreen')}
          style={styles.btn}
        >
          <FontAwesome5 name="bus-alt" size={24} color="#f6f6f6" />
          <Text style={styles.btnTxt}>School Bus</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // marginTop: 30,
  },
  btm: {
    backgroundColor: '#f6f6f6',
    width: Window.width,
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: Window.dark,
    width: Window.width / 2.1,
    marginHorizontal: 5,
    borderRadius: 30,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnTxt: {
    color: '#f6f6f6',
    fontSize: 20,
    marginLeft: 10,
  },
});

//make this component available to the app
export default Dashboard;
