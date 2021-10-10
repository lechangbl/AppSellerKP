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
   // const Main = () => {
   return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
         <Text style={{
            fontSize: fontsize.h3,
            color: colors.backgroundGreen
         }}>
            MAIN
         </Text>

         <TouchableOpacity
            style={{
               backgroundColor: colors.backgroundGreen,
               height: 60,
               width: 300,
               borderRadius: 10,
               margin: 20,
               justifyContent: 'center',
               alignItems: 'center'
            }}
            onPress={() => {
               navigation.navigate('Authentication')
            }}
         >
            <Text style={{
               fontSize: 30,
               color: 'white',
               alignItems: 'center'
            }}>
               goto Authentication
            </Text>
         </TouchableOpacity>

         <TouchableOpacity
            style={{
               backgroundColor: colors.backgroundGreen,
               height: 60,
               width: 300,
               borderRadius: 10,
               margin: 20,
               justifyContent: 'center',
               alignItems: 'center'
            }}
            onPress={() => {
               navigation.navigate('OderHistory')
            }}
         >
            <Text style={{
               fontSize: 30,
               color: 'white',
               alignItems: 'center'
            }}>
               goto OderHistory
            </Text>
         </TouchableOpacity>

      </View>
      // <NavigationContainer>

      //    <Drawer.Navigator>
      //       <Drawer.Screen name="Feed" component={Menu} />
      //       <Drawer.Screen name="Article" component={Shop} />
      //    </Drawer.Navigator>
      // </NavigationContainer>
   );
};

export default Main
