import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { perfectSize } from "../../../../themes";
import { fontsize, colors } from "../../../../themes";
import { SignHeader } from "./SignHeader";
import SignInNow from "./SignInNow";
import SignUpNow from "./SignUpNow";

const SignIn = () => {

   const [isSignActive, setisSignActive] = useState(true)
   const colorSignin = isSignActive ? colors.backgroundGreen : colors.backgroundGray
   const colorSignup = isSignActive ? colors.backgroundGray : colors.backgroundGreen
   const contentSignin = isSignActive ? <SignInNow /> : <SignUpNow />

   const PressSignin = () => {
      setisSignActive(true)
   }
   const PressSignup = () => {
      setisSignActive(false)
   }

   return (
      <View style={styles.container} >

         {SignHeader()}

         <View style={styles.viewContent}>
            {contentSignin}
         </View>

         <View style={styles.viewBottomTab}>
            <TouchableOpacity
               style={[
                  styles.bottomTab, {
                     borderBottomLeftRadius: perfectSize(30),
                     borderTopLeftRadius: perfectSize(30)
                  }]}
               onPress={PressSignin}
            >
               <Text
                  style={[styles.textBottomTab, { color: colorSignin }]}
               >
                  SIGN IN
               </Text>
            </TouchableOpacity>

            <TouchableOpacity
               style={[
                  styles.bottomTab, {
                     borderBottomRightRadius: perfectSize(30),
                     borderTopRightRadius: perfectSize(30)
                  }]}
               onPress={PressSignup}
            >
               <Text
                  style={[styles.textBottomTab, { color: colorSignup }]}
               >
                  SIGN UP
               </Text>
            </TouchableOpacity>
         </View>

      </View>


   );
}

export const styles = StyleSheet.create({
   container: { flex: 1, backgroundColor: colors.backgroundGreen },
   viewHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.backgroundGreen,
      width: '100%',
      height: perfectSize(100)
   },
   styleIMG: {
      height: perfectSize(40),
      width: perfectSize(40),
      margin: perfectSize(12)
   },
   styleTextTitle: {
      fontSize: fontsize.h3,
      color: colors.titleTextHeader,
      // fontWeight: 'bold'
   },
   viewContent: {
      flex: 1,
      // backgroundColor: 'tomato'
   },
   viewBottomTab: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
   },
   bottomTab: {
      marginVertical: perfectSize(30),
      marginHorizontal: perfectSize(5),
      height: perfectSize(60),
      width: perfectSize(170),
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center'
   },
   textBottomTab: {
      fontSize: fontsize.h2,

   }
})

export default SignIn


