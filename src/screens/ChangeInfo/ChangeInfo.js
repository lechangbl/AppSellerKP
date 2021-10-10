import React from 'react';
import {
   Text, View
} from 'react-native';
import {
   colors, fontsize
} from '../../themes'


const ChangeInfo = () => {
   return (
      <View>
         <Text style={{
            fontSize: fontsize.h3,
            color: colors.white
         }}>
            CHANGE INFO
         </Text>
      </View>
   );
};

export default ChangeInfo;
