//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import PickAddress from './pickAddress';
import Window from './Width';
import DropDownPicker from 'react-native-dropdown-picker';

// create a component
const ChooseLocation = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: '11:15', value: '11:15' },
    // { label: '13:00', value: '13:00' },
    // { label: '15:00', value: '15:00' },
    // { label: '18:00', value: '18:00' },
  ]);
  const [state, setState] = useState({
    pickupCords: {},
    droplocationCords: {}
  })


  const fetchAddressCords = (lat, lng) => {
    // console.log("latitude: ",lat);
    // console.log("longitude: ",lng);
    setState({ 
      ...state, pickupCords:{
        latitude: lat,
        longitude: lng
      }
    })
  }
  const fetchDestinationCords = (lat, lng) => {
    // console.log("latitude: ",lat);
    // console.log("longitude: ",lng);
    setState({ 
      ...state, droplocationCords:{
        latitude: lat,
        longitude: lng
      }
    })
  }

  const { pickupCords, droplocationCords } = state;
  const onDone = () => {
    navigation.push('Route', {pickupCords, droplocationCords});
  }
  
  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{
          
          backgroundColor: Window.dark,
          paddingHorizontal: 10,
        }}
      >
        <PickAddress fetchAddress={fetchAddressCords} pText="From" />
        <PickAddress fetchAddress={fetchDestinationCords} pText="To" />
        <View>
          {/* <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            containerStyle={{
              borderRadius: 30,
            }}
            style={{
              backgroundColor: '#f6f6f6',
              borderWidth: 0,
              borderColor: '#f6f6f6',
              paddingVertical: 15,
              // height: 50,
            }}
          /> */}
          <TouchableOpacity style={styles.btn} onPress={onDone}>
            <Text style={styles.btnTxt}>Done</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 30,
    // justifyContent: 'center',
    backgroundColor: '#fff',
  },
  btn: {
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: Window.Purple,
    paddingVertical: 10,
    width: Window.width / 2.5,
    marginBottom: 5,
    borderRadius: 10,
  },
  btnTxt: {
    color: '#fff',
    fontSize: 20,
    alignSelf: 'center',
  },
});

//make this component available to the app
export default ChooseLocation;
