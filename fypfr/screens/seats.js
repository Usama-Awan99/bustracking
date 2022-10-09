import React,{useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Seats({ sno, press, cStatus }) {
  const [cstatus, setStatus] = useState(false);
  return (
    <View style={styles.left}>
      <TouchableOpacity
        style={[styles.seat, cstatus ? styles.filled : styles.empty]}
        onPress={() => setStatus(!cstatus)}
      >
        <Text>{sno}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  seat: {
    width: 40,
    height: 35,
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    // backgroundColor: 'lightgray'
  },
  filled: {
    backgroundColor: 'skyblue',
  },
  empty: {
    backgroundColor: 'lightgray',
  },
});
