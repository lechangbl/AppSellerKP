import React from 'react';
import {
   Text, View
} from 'react-native';
import {
   colors, fontsize
} from '../../themes'


const OderHistory = () => {
   return (
      <View>
         <Text style={{
            fontSize: fontsize.h3,
            color: colors.gray
         }}>
            ODER HISTORY
         </Text>
      </View>
   );
};

export default OderHistory;
