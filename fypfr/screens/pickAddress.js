//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Window from './Width';

// create a component
const PickAddress = ({ pText, fetchAddress }) => {

    const onPressAddress = (data, details) => {
        const lat = details.geometry.location.lat;
        const lng = details.geometry.location.lng;
        fetchAddress(lat, lng);
        console.log("data is --> ",data);
        
    }

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder={pText}
        onPress={onPressAddress}
        fetchDetails = {true}
        
        query={{
          key: Window.GOOGLE_MAPS_APIKEY,
          language: 'en',
        }}
        styles={{
          textInputContainer: styles.containerStyle,
          textInput: styles.textInputStyle,
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  textInputStyle: {
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    backgroundColor: '#f6f6f6',
  },
});

//make this component available to the app
export default PickAddress;
