import React from "react";
import {
   View, Image, StyleSheet
} from 'react-native'
import { Header } from '../../../screens'
import {
   Home, Search, Cart, Contact
} from '../Shop/bottomtab'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import iconIMG from '../../../media/appIcon'
import { perfectSize } from '../../../themes'

// =======================================================================
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
                  tabBarHideOnKeyboard: true,
                  headerShown: false,
               }}
               initialRouteName="Home"
            >
               <Tab.Screen
                  options={{
                     tabBarIcon: () => (
                        <Image
                           source={iconIMG.tabHome}
                           style={styles.iconImage}
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
                           source={iconIMG.tabCart}
                           style={styles.iconImage}
                        />
                     ),
                     tabBarBadge: 20,
                     tabBarBadgeStyle: {
                        color: 'white',
                        backgroundColor: 'blue'
                        // fontSize: 20
                     }
                  }}
                  name="Cart"
                  component={Cart}
               />
               <Tab.Screen
                  options={{
                     tabBarIcon: () => (
                        <Image
                           source={iconIMG.tabSearch}
                           style={styles.iconImage}
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
                           source={iconIMG.tabContact}
                           style={styles.iconImage}
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

const styles = StyleSheet.create({
   iconImage: {
      width: perfectSize(30),
      height: perfectSize(30),
   }
})

export default Shop
