import React from "react";
import {
   View, StyleSheet
} from 'react-native'
import { Header } from '../../../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { perfectSize } from '../../../themes'
import { BottomTab } from "./bottomtab/BottomTab";

// =======================================================================
export const Tab = createBottomTabNavigator();

const Shop = ({ navigation }) => {
   const open = () => { navigation.openDrawer() }
   return (
      <View style={{ flex: 1 }} >
         <Header Open={open} />
         <View style={{ flex: 1 }}>
            {BottomTab()}
         </View>
      </View>
   )

}

export const styles = StyleSheet.create({
   iconImage: {
      width: perfectSize(30),
      height: perfectSize(30),
   }
})

export default Shop
