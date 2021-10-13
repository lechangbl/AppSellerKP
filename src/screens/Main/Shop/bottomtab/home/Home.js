import React, { useState } from "react";
import {
   View, Text, ScrollView, StyleSheet, Image, ImageBackground
} from 'react-native'
import { colors, fontsize, perfectSize } from "../../../../../themes";
import tempIMG from '../../../../../media/temp'
import Swiper from 'react-native-swiper'
import SpingCollection from "./SpingCollection";
import temp from "../../../../../media/temp";
import { swiperItem } from "./swiperItem";

const imageSize = {
   height: perfectSize(185),
   width: perfectSize(370)
}

const Home = () => {
   const [typeofProduct, setTypeofProduct] = useState({
      nameDress: 'Fit',
      imageDress: tempIMG.category1,
   })


   return (
      <View
         style={styles.container}
      >
         <ScrollView
            contentContainerStyle={styles.scrollviewStyle}
         >
            {/* <SpingCollection /> */}

            <View
               style={styles.itemStyle}
            >
               <View
                  style={{
                     flex: 1,
                     backgroundColor: 'white'
                  }}
               >
                  <Text style={{
                     fontSize: fontsize.h3,
                     color: colors.textGray,
                     padding: 10
                  }}>
                     LIST OF CATEGORY
                  </Text>
               </View>

               <View
                  style={{
                     flex: 4,
                     justifyContent: 'flex-end',
                     alignItems: 'center',
                     backgroundColor: 'grey'
                  }}
               >
                  <Swiper
                     showsPagination
                     width={imageSize.width}
                     height={imageSize.height}
                     loop={false}
                  >
                     {/* <swiperItem typeofProduct={typeofProduct} /> */}
                     {swiperItem(typeofProduct)}

                     <View
                        style={styles.swiperStyle}
                     >
                        <ImageBackground
                           source={tempIMG.category2}
                           style={styles.imageSwiperStyle}
                        >
                           <Text
                              style={{
                                 fontSize: fontsize.h2,
                                 color: colors.textGray,
                                 marginBottom: 40
                              }}
                           >
                              Little Dress
                           </Text>
                        </ImageBackground>
                     </View>

                  </Swiper>
               </View>

            </View>

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
      // backgroundColor: 'tomato'
   },
   scrollviewStyle: {
      alignItems: 'center'
   },
   itemStyle: {
      backgroundColor: colors.backgroundGreen,
      width: '93%',
      height: perfectSize(273),
      marginTop: perfectSize(20),
      justifyContent: 'space-between'
   },
   swiperStyle: {
      height: '100%',
      width: '95%',
      // backgroundColor: 'blue',
      marginTop: perfectSize(4),
      justifyContent: 'center',
      // alignItems: 'center'
   },
   imageSwiperStyle: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      width: imageSize.width - perfectSize(2),
      height: imageSize.height,
      // resizeMode: 'contain',
   }
})

export default Home


