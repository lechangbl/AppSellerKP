import React from 'react';
import {
   Text, View, TouchableOpacity, StyleSheet
} from 'react-native';
import {
   colors, fontsize
} from '../../themes'


const Authentication = ({ navigation }) => {
   const GotoMain = () => {
      navigation.pop()
   }

   return (
      <View style={styles.container}>
         <Text style={styles.text}>
            AUTHENTICATION
         </Text>
         <TouchableOpacity
            style={styles.touchableopacity}
            onPress={() => GotoMain()}
         >
            <Text>
               BACK
            </Text>
         </TouchableOpacity>
      </View>
   );
};



const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: colors.backgroundGray,
      justifyContent: 'center',
      alignItems: 'center'

   },
   text: {
      fontSize: fontsize.h3,
      color: colors.blue
   },
   touchableopacity: {
      backgroundColor: 'tomato',
      height: 60,
      width: 200,
      borderRadius: 10,
      margin: 20
   }
})



export default Authentication;
