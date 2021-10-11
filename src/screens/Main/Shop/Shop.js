import React from "react";
import {
   Text, View, Image
} from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import { Header } from '../../../screens'
import {
   Home, Search, Cart, Contact
} from '../Shop/bottomtab'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Shop = ({ navigation }) => {
   const open = () => { navigation.openDrawer() }
   return (
      <View style={{ flex: 1 }} >
         <Header Open={open} />
         <View style={{ flex: 1 }}>
            <Tab.Navigator
               screenOptions={{
                  tabBarActiveBackgroundColor: 'yellow',
                  // tabBarInactiveBackgroundColor: 'gray',
                  tabBarHideOnKeyboard: true,
                  headerShown: false,

               }}
               initialRouteName="Contact"
            >
               <Tab.Screen
                  options={{
                     tabBarIcon: () => (
                        <Image
                           source={require('../../../media/appIcon/home.png')}
                           style={{ width: 30, height: 30 }}
                        />
                     ),
                  }}
                  name="Home"
                  component={Home}
               />
               <Tab.Screen
                  options={{
                     tabBarIcon: () => (
                        <Image
                           source={require('../../../media/appIcon/cart.png')}
                           style={{ width: 30, height: 30 }}
                        />
                     ),
                  }}
                  name="Cart"
                  component={Cart}
               />
               <Tab.Screen
                  options={{
                     tabBarIcon: () => (
                        <Image
                           source={require('../../../media/appIcon/search.png')}
                           style={{ width: 30, height: 30 }}
                        />
                     ),
                  }}
                  name="Search"
                  component={Search}
               />
               <Tab.Screen
                  options={{
                     tabBarIcon: () => (
                        <Image
                           source={require('../../../media/appIcon/contact.png')}
                           style={{ width: 30, height: 30 }}
                        />
                     ),
                  }}
                  name="Contact"
                  component={Contact}
               />
            </Tab.Navigator>
         </View>

      </View>
   )
}

export default Shop
