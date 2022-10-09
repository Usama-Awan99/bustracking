//import liraries
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Window from './Width';

// create a component
const Directions = ({ navigation, route }) => {
  const [state, setState] = useState({
    pickupCords: {
      latitude: route.params.pickupCords.latitude,
      longitude: route.params.pickupCords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    droplocationCords: {
      latitude: route.params.droplocationCords.latitude,
      longitude: route.params.droplocationCords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });

  const mapRef = useRef();

  const { pickupCords, droplocationCords } = state;
  // console.log(pickupCords, droplocationCords);

  return (
    <View style={styles.container}>
      <View style={{ width: Window.width, height: Window.height }}>
        <MapView ref={mapRef} style={StyleSheet.absoluteFill} initialRegion={pickupCords}>
          <Marker coordinate={pickupCords} />
          <Marker coordinate={droplocationCords} />
          <MapViewDirections
            origin={pickupCords}
            destination={droplocationCords}
            apikey={Window.GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="brown"
            optimizeWaypoints={true}
            onReady={result => { 
              mapRef.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: 30,
                  bottom: 300,
                  left: 30,
                  top: 100,
                }
              })
            }}
          />
        </MapView>
      </View>
      <View style={styles.btm}>
        <TouchableOpacity
          onPress={() => navigation.navigate('BusAvailable')}
          style={styles.btn}
        >
          <Text style={styles.btnTxt}>Search Bus</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  btm: {
    position: 'absolute',
    bottom: 25,
    left: Window.width / 4.1,
  },
  btnTxt: {
    color: '#f6f6f6',
    fontSize: 20,
    marginLeft: 10,
  },
});

//make this component available to the app
export default Directions;
