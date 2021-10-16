import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { colors, fontsize, perfectSize } from "../../../../../themes";
import tempIMG from '../../../../../media/temp';
import { styles } from "./Home";
import { imageSize } from "./Home";
export default function SpingCollection() {
    return <View
        style={styles.itemStyle}
    >
        <Text style={{
            fontSize: fontsize.h3,
            color: colors.textGray,
            padding: perfectSize(15)
        }}>
            SPING COLLECTION
        </Text>

        <TouchableOpacity
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
            }}
            onPress={() => console.log('press img')}
        >
            <Image
                source={tempIMG.springCollection}
                style={{
                    width: imageSize.width,
                    resizeMode: 'contain'
                }} />
        </TouchableOpacity>
    </View>;
}
