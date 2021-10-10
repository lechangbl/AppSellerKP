import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react'
import {
   Text, TouchableOpacity, View,
} from 'react-native'
import {
   colors, fontsize
} from '../../themes'
import Menu from './Menu/Menu';
import Shop from './Shop/Shop';

const Drawer = createDrawerNavigator();

const Main = ({ navigation }) => {
   return (
      <Drawer.Navigator>
         <Drawer.Screen
            name="Shop"
            component={Shop}
         />
         <Drawer.Screen
            name="Menu"
            component={Menu}
         />
      </Drawer.Navigator>
   );
};

export default Main
