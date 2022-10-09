import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Seat from './seats';
import Window from './Width';

const arrays = [
  {
    sno: 1,
    booked: false,
  },
  {
    sno: 2,
    booked: false,
  },
  {
    sno: 3,
    booked: false,
  },
  {
    sno: 4,
    booked: true,
  },
  {
    sno: 5,
    booked: false,
  },
  {
    sno: 6,
    booked: false,
  },
  {
    sno: 7,
    booked: true,
  },
  {
    sno: 8,
    booked: false,
  },
  {
    sno: 9,
    booked: false,
  },
  {
    sno: 10,
    booked: false,
  },
  {
    sno: 11,
    booked: false,
  },
  {
    sno: 12,
    booked: false,
  },
  {
    sno: 13,
    booked: false,
  },
  {
    sno: 14,
    booked: false,
  },
  {
    sno: 15,
    booked: false,
  },
  {
    sno: 16,
    booked: false,
  },
  {
    sno: 17,
    booked: true,
  },
  {
    sno: 18,
    booked: true,
  },
  {
    sno: 19,
    booked: false,
  },
  {
    sno: 20,
    booked: false,
  },
  {
    sno: 21,
    booked: false,
  },
  {
    sno: 22,
    booked: false,
  },
  {
    sno: 23,
    booked: false,
  },
  {
    sno: 24,
    booked: false,
  },
  {
    sno: 25,
    booked: false,
  },
  {
    sno: 26,
    booked: false,
  },
  {
    sno: 26,
    booked: false,
  },
  {
    sno: 27,
    booked: false,
  },
  {
    sno: 28,
    booked: false,
  },
  {
    sno: 29,
    booked: false,
  },
  {
    sno: 30,
    booked: false,
  },
  {
    sno: 31,
    booked: false,
  },
  {
    sno: 32,
    booked: false,
  },
];

export default function SeatsAvailable() {
  const [select, setSelect] = useState(arrays);

  const changestatus = (no) => {
    setSelect((select[no - 1].booked = true));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.mainCot}>
          <View style={styles.wheel}>
            <MaterialCommunityIcons name="steering" size={35} color="gray" />
          </View>
          <View style={styles.top}>
            <View style={styles.left}>
              <Seat sno={3} press={changestatus} />
              <Seat sno={4} press={changestatus} />
              <Seat sno={7} press={changestatus} />
              <Seat sno={8} press={changestatus} />
              <Seat sno={11} press={changestatus} />
              <Seat sno={12} press={changestatus} />
              <Seat sno={15} press={changestatus} />
              <Seat sno={16} press={changestatus} />
              <Seat sno={19} press={changestatus} />
              <Seat sno={20} press={changestatus} />
              <Seat sno={23} press={changestatus} />
              <Seat sno={24} press={changestatus} />
              <Seat sno={27} press={changestatus} />
              <Seat sno={28} press={changestatus} />
            </View>
            <View style={styles.right}>
              <Seat sno={1} press={changestatus} />
              <Seat sno={2} press={changestatus} />
              <Seat sno={5} press={changestatus} />
              <Seat sno={6} press={changestatus} />
              <Seat sno={9} press={changestatus} />
              <Seat sno={10} press={changestatus} />
              <Seat sno={13} press={changestatus} />
              <Seat sno={14} press={changestatus} />
              <Seat sno={17} press={changestatus} />
              <Seat sno={18} press={changestatus} />
              <Seat sno={21} press={changestatus} />
              <Seat sno={22} press={changestatus} />
              <Seat sno={25} press={changestatus} />
              <Seat sno={26} press={changestatus} />
            </View>
          </View>
          <View style={styles.btm}>
            <Seat sno={28} press={changestatus} />
            <Seat sno={29} press={changestatus} />
            <Seat sno={30} press={changestatus} />
            <Seat sno={31} press={changestatus} />
            <Seat sno={32} press={changestatus} />
          </View>
        </View>

        <View style={styles.status}>
          <Text style={styles.head}>Seat Status</Text>
          <View style={styles.sbottom}>
            <View style={styles.sleft}>
              <TouchableOpacity style={styles.sbooked}>
                <Text></Text>
              </TouchableOpacity>
              <Text style={styles.stxt}>Booked</Text>
            </View>
            <View style={styles.sleft}>
              <TouchableOpacity style={styles.savailable}>
                <Text></Text>
              </TouchableOpacity>
              <Text style={styles.stxt}>Available</Text>
            </View>
          </View>
        </View>
        <View style={styles.lastB}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTxt}>Book</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,

    backgroundColor: '#ecf0f1',
    paddingHorizontal: 40,
  },
  mainCot: {
    borderWidth: 2,
    marginTop: 15,
    borderColor: 'lightgray',
    // height: 300,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  btm: {
    flexDirection: 'row',
    // backgroundColor: 'red'
    justifyContent: 'space-between',
  },
  wheel: {
    alignItems: 'flex-end',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  right: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: 90,
    // backgroundColor: 'blue',
    justifyContent: 'space-between',
  },
  left: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: 90,
    // backgroundColor: 'blue',
    justifyContent: 'space-between',
  },
  status: {
    marginTop: 15,
    borderWidth: 2,
    borderColor: 'lightgray',
    padding: 15,
  },
  head: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 20,
  },
  sbottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  sleft: {
    flexDirection: 'row',
    width: 80,
    // backgroundColor: 'white',
    alignItems: 'center',
  },
  sbooked: {
    backgroundColor: 'skyblue',
    width: 30,
    height: 25,
    marginRight: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  savailable: {
    backgroundColor: 'lightgray',
    width: 30,
    height: 25,
    marginRight: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  lastB: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: Window.dark,
    width: 150,
    paddingVertical: 10,
    borderRadius: 30,
  },
  btnTxt: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
});
