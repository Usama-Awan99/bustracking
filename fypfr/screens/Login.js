import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Window from './Width';
import { FontAwesome } from '@expo/vector-icons';

export default function Login({navigation}) {
  const [secure, setsecure] = useState(true);
  const [uname, setuname] = useState('');
  const [pass, setpass] = useState('');
  const [load, setLoad] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imgCont}>
        <View style={styles.img}>
          <FontAwesome
            name="user-circle-o"
            size={Window.width / 3}
            color="#fff"
          />
        </View>
      </View>
      <View style={styles.middle}>
        <Text style={styles.head}>Login</Text>
      </View>
      <View style={styles.inputCont}>
        <View style={styles.inputs}>
          <View style={styles.input}>
            <TextInput
              style={styles.fields}
              placeholder="Phone no"
              placeholderTextColor="lightgray"
              value={uname}
              onChangeText={(el) => setuname(el)}
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
          <TouchableOpacity
            style={styles.forgot}
            onPress={() => navigation.push('ForgotPassword')}
          >
            <Text
              style={{
                color: Window.Purple,
                alignSelf: 'flex-end',
                fontSize: 16,
              }}
            >
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnCont}>
          <TouchableOpacity style={styles.btn}>
            {load ? (
              <ActivityIndicator size="large" color="#fff" />
            ) : (
              <Text style={styles.btnTxt}>Sign In</Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.upCont}>
          <Text>Not Have an Account?</Text>
          <TouchableOpacity
            style={styles.upbtn}
            onPress={() => navigation.push('SignUp')}
          >
            <Text style={styles.upBtn}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: Window.dark,
  },
  imgCont: {
    height: Window.height / 3.5,
    backgroundColor: Window.Purple,
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
  },
  img: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
  },
  middle: {
    height: Window.height / 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  head: {
    fontSize: 40,
    fontWeight: 'bold',
    color: Window.Purple,
  },
  inputCont: {
    height: Window.height / 1.6,
  },
  inputs: {
    height: Window.height / 4,
    // backgroundColor: '#000',
    justifyContent: 'center',
    padding: 15,
  },
  input: {
    flex: 1,
    backgroundColor: Window.inputColor,
    marginVertical: 10,
    width: Window.width / 1.2,
    alignSelf: 'center',
    height: 50,
    borderRadius: 30,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    bottom: -9,
  },
  btnCont: {
    height: Window.height / 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: Window.Purple,
    width: Window.width / 1.3,
    padding: 10,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnTxt: {
    alignSelf: 'center',
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  upCont: {
    marginVertical: 10,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  upBtn: {
    marginLeft: 10,
    color: '#fff',
  },
});
