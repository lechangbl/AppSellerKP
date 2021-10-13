import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { colors, fontsize } from "../../../../../themes";
import tempIMG from '../../../../../media/temp';
import { styles } from "./Home";

export default function SpingCollection() {
    return <View
        style={styles.itemStyle}
    >
        <Text style={{
            fontSize: fontsize.h3,
            color: colors.textGray,
            padding: 15
        }}>
            SPING COLLECTION
        </Text>

        <TouchableOpacity
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                backgroundColor: 'red'
            }}
            onPress={() => console.log('press img')}
        >
            <Image
                source={tempIMG.springCollection}
                style={{
                    width: '91%',
                    resizeMode: 'contain'
                }} />
        </TouchableOpacity>
    </View>;
}
