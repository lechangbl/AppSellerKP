import React from "react";
import {
   Text, View, Image
} from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";

import {
   colors
} from '../../../themes'

import MenuSignin from "./MenuSignin";
import MenuSignOut from "./MenuSignOut";

const Menu = () => {

   return (
      <View
         style={{
            flex: 1,
            backgroundColor: colors.backgroundGreen,
            alignItems: 'center'
         }}
      >
         <MenuSignin />

      </View>
   );
}

export default Menu
