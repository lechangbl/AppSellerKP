import React from "react";
import { View } from 'react-native'
import MenuSignin from "./MenuSignin";
import MenuSignOut from './MenuSignOut'
import { styles } from "./styles";

const Menu = () => {

   return (
      <View style={styles.container} >

         <MenuSignOut />

      </View>
   );
}

export default Menu
