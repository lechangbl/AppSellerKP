import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import {
   Text, TouchableOpacity, View,
} from 'react-native'
// import { Header } from 'react-native/Libraries/NewAppScreen';
import {
   colors, fontsize
} from '../../themes'
import Menu from './Menu/Menu';
import Shop from './Shop/Shop';
import { Header } from '../../screens';

const Drawer = createDrawerNavigator();

const Main = ({ navigation }) => {
   return (
      <Drawer.Navigator
         screenOptions={{
            drawerStyle: {
               backgroundColor: 'pink',
               width: 340,
            },
         }}
         initialRouteName='Menu'
      >
         <Drawer.Screen
            options={{
               headerShown: false
            }}
            name="Shop"
            component={Shop}
         />
         <Drawer.Screen
            options={{
               headerShown: false
            }}

            name="Menu"
            component={Menu}
         />
      </Drawer.Navigator>
   );
};

export default Main
