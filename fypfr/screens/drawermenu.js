import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Local Files Here
import Dashboard from './Dash';
import Driver from './Driver';
import Window from './Width';
import CustomDrawer from './CustomDrawer';
import {Ionicons} from '@expo/vector-icons';


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: Window.dark,
        },
        headerTintColor: 'white',
        drawerActiveBackgroundColor: Window.dark,
        drawerActiveTintColor: '#f6f6f6',
        drawerLabelStyle: {
            marginLeft: 15,
            fontSize:16
        }
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
            title: 'Home',
            // drawerIcon: () => {
            //     <Ionicons name="home-outline" size={22} color={Window.dark} />
            // }
          }}
          
      />
      <Drawer.Screen name="Driver" component={Driver} options={{title: "Driver Mode"}} />
    </Drawer.Navigator>
  );
}

// define your styles

//make this component available to the app
export default MyDrawer;
