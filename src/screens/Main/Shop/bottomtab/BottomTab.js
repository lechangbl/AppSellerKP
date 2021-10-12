import React, { useState } from "react";
import { Image } from 'react-native';
import { Home, Search, Cart, Contact } from '../bottomtab';
import iconIMG from '../../../../media/appIcon';
import { Tab, styles } from "../Shop";
import { colors, perfectSize } from "../../../../themes";
export function BottomTab() {
   const [numBaddge, setNumBaddge] = useState(39)

   return <Tab.Navigator
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
                  style={styles.iconImage} />
            ),
         }}
         name="Home"
         component={Home} />
      <Tab.Screen
         options={{
            tabBarIcon: () => (
               <Image
                  source={iconIMG.tabCart}
                  style={styles.iconImage} />
            ),
            tabBarBadge: numBaddge,
            tabBarBadgeStyle: {
               color: colors.colorTextBaddge,
               backgroundColor: colors.colorBaddge
            }
         }}
         name="Cart"
         component={Cart} />
      <Tab.Screen
         options={{
            tabBarIcon: () => (
               <Image
                  source={iconIMG.tabSearch}
                  style={styles.iconImage} />
            ),
         }}
         name="Search"
         component={Search} />
      <Tab.Screen
         options={{
            tabBarIcon: () => (
               <Image
                  source={iconIMG.tabContact}
                  style={styles.iconImage} />
            ),
         }}
         name="Contact"
         component={Contact} />
   </Tab.Navigator>;
}
