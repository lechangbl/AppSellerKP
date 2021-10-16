import React, { useState } from "react";
import {
   View, ScrollView, StyleSheet, Image
} from 'react-native'
import { colors, perfectSize } from "../../../../../themes";
import tempIMG from '../../../../../media/temp'
import SpingCollection from "./SpingCollection";
import temp from "../../../../../media/temp";
import { Category } from "./Category";

export const imageSize = {
   height: perfectSize(175),
   width: perfectSize(350)
}


const Home = () => {
   const [typeofProduct, setTypeofProduct] = useState({
      nameDress: 'Fit',
      imageDress: tempIMG.category1,
   })

   const TestPressImage = () => {
      // return(
      setTypeofProduct({
         nameDress: 'Little',
         imageDress: tempIMG.category3,
      })
      console.log('funtion ok')
      // )
   }

   return (
      <View
         style={styles.container}
      >
         <ScrollView
            contentContainerStyle={styles.scrollviewStyle}
         >
            <SpingCollection />
            <Category
               typeofProduct={typeofProduct}
               TestPressImage={TestPressImage}
            />

            <View
               style={styles.itemStyle}
            >

            </View>


         </ScrollView>
      </View>
   )
}
export const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: colors.backgroundGray,
   },
   scrollviewStyle: {
      alignItems: 'center'
   },
   itemStyle: {
      backgroundColor: colors.backgroundWhite,
      width: imageSize.width + 20,
      height: imageSize.height + 100,
      margin: perfectSize(20),
      justifyContent: 'space-between',

      shadowColor: "#000",
      shadowOffset: {
         width: 9,
         height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,

      elevation: 24
   },
   swiperStyle: {
      width: imageSize.width,
      height: imageSize.height,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'yellow'
   },
   imageSwiperStyle: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      height: imageSize.height,
      resizeMode: 'contain',
      width: imageSize.width,
   }
})

export default Home



