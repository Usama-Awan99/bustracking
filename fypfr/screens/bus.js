//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';

// create a component
const BusAvailable = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.mainbox} onPress={() => navigation.push('PickSeat')}>
                <Image source={require('../assets/bus.jpg')} style={styles.img} />
                <View style={styles.center}>
                    <Text style={styles.eng}>LZV</Text>
                    <Text style={styles.nmb}>2186</Text>
                    <Text style={styles.time}>19:00</Text>
                </View>
                <View style={styles.rightbox}>
                    <Text style={styles.price}>Rs 150/-</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainbox}>
                <Image source={require('../assets/bus2.jpg')} style={styles.img} />
                <View style={styles.center}>
                    <Text style={styles.eng}>STV</Text>
                    <Text style={styles.nmb}>7186</Text>
                    <Text style={styles.time}>13:00</Text>
                </View>
                <View style={styles.rightbox}>
                    <Text style={styles.price}>Rs 150/-</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainbox}>
                <Image source={require('../assets/bus.jpg')} style={styles.img} />
                <View style={styles.center}>
                    <Text style={styles.eng}>GWV</Text>
                    <Text style={styles.nmb}>6586</Text>
                    <Text style={styles.time}>11:00</Text>
                </View>
                <View style={styles.rightbox}>
                    <Text style={styles.price}>Rs 150/-</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    mainbox: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 3,
        elevation: 5,
        borderRadius: 5,
        marginVertical: 5,
    },
    img: {
        width:150,
        height: 100,
    },
    center: {
        marginHorizontal:5,
        width: 100,
        alignItems: 'center'
    },
    eng: {
        fontSize:22,
        fontWeight:'bold',
        letterSpacing:1,
        marginTop: 10,
        marginBottom: 3,
    },
    nmb:{
        fontSize: 20,
        marginBottom: 10,
    },
    time: {
        fontSize:18,
    },
    rightbox: {
        justifyContent: 'center',
    },
    price: {
        fontSize:20,
    }
});

//make this component available to the app
export default BusAvailable;
