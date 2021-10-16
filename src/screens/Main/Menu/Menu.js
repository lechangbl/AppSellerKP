import React from "react";
import { View } from 'react-native'
import MenuSignin from "./MenuSignin";
import MenuSignOut from './MenuSignOut'
import { styles } from "./styles";

const Menu = () => {

   return (
      <View style={styles.container} >

         <MenuSignin />

      </View>
   );
}

export default Menu
