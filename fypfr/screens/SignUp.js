//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Window from './Width';
import { FontAwesome } from '@expo/vector-icons';

// create a component
const SignUp = () => {
    const [uname, setname] = useState('');
    const [mble, setmble] = useState('');
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    const [cpass, setcpass] = useState('');
    const [secure, setsecure] = useState(true);
    const [csecure, setcsecure] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <FontAwesome
          name="user-circle-o"
          size={Window.width / 3}
          color={Window.Purple}
        />
        <Text style={styles.topTxt}>SignUp</Text>
      </View>
      <View style={styles.btm}>
        <View style={styles.input}>
          <TextInput
            style={styles.fields}
            placeholder="Name"
            placeholderTextColor="lightgray"
            value={uname}
            onChangeText={(el) => setname(el)}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.fields}
            placeholder="Phone"
            placeholderTextColor="lightgray"
            value={mble}
            onChangeText={(el) => setmble(el)}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.fields}
            placeholder="Email"
            placeholderTextColor="lightgray"
            value={email}
            onChangeText={(el) => setemail(el)}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.fields}
            placeholder="Password"
            placeholderTextColor="lightgray"
            secureTextEntry={secure}
            value={pass}
            onChangeText={(el) => setpass(el)}
          />
          <TouchableOpacity onPress={() => setsecure(!secure)}>
            {secure ? (
              <FontAwesome
                style={styles.icon}
                name="eye"
                size={24}
                color={Window.Purple}
              />
            ) : (
              <FontAwesome
                style={styles.icon}
                name="eye-slash"
                size={24}
                color={Window.Purple}
              />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.fields}
            placeholder="Confirm Password"
            placeholderTextColor="lightgray"
            secureTextEntry={secure}
            value={pass}
            onChangeText={(el) => setpass(el)}
          />
          <TouchableOpacity onPress={() => setcsecure(!csecure)}>
            {csecure ? (
              <FontAwesome
                style={styles.icon}
                name="eye"
                size={24}
                color={Window.Purple}
              />
            ) : (
              <FontAwesome
                style={styles.icon}
                name="eye-slash"
                size={24}
                color={Window.Purple}
              />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btmbtn}>
            <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.end}>
            <Text>Have an Account?</Text>
            <TouchableOpacity>
                <Text style={{color: '#fff',fontSize:18, marginLeft:10}}>Sign In</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Window.dark,
  },
  top: {
    width: Window.width,
    height: Window.height / 3.3,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  topTxt: {
    color: Window.Purple,
    // color: 'white',
    fontSize: 40,
    marginTop: 5,
    fontWeight: 'bold',
  },
  btm:{
    height: Window.height / 1.2,
    // backgroundColor: '#fff',
    // paddingHorizontal: 10,
  },

  input: {
    backgroundColor: Window.inputColor,
    width: Window.width/1.1,
    alignSelf: 'center',
    marginTop: 10,
    height: 50,
    borderRadius: 30,
    paddingHorizontal: 10,
    // flex: 1,
    // backgroundColor: Window.inputColor,
    // marginVertical: 10,
    // width: Window.width / 1.2,
    // alignSelf: 'center',
    // height: 50,
    // borderRadius: 30,
    // paddingHorizontal: 15,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  fields: {
    color: '#000',
    fontSize: 16,
    // backgroundColor: '#000',
    width: 290,
    paddingVertical: 10,
    // fontWeight: 'bold',
    fontSize: 18,
    // fontFamily: 'Poppins',
  },
  icon: {
    position: 'absolute',
    right: 15,
    bottom: 10,
  },
  btmbtn: {
    marginTop: 15,
    alignSelf: 'center',
    backgroundColor: Window.Purple,
    width: Window.width / 1.5,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 25
  },
  end: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  }
});

//make this component available to the app
export default SignUp;
