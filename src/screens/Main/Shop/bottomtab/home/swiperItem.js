import React from "react";
import { View, Text, ImageBackground } from 'react-native';
import { colors, fontsize } from "../../../../../themes";
import { styles } from "./Home";

export function swiperItem(typeofProduct) {
    return <View
        style={styles.swiperStyle}
    >
        <ImageBackground
            source={typeofProduct.imageDress}
            style={styles.imageSwiperStyle}
        >
            <Text
                style={{
                    fontSize: fontsize.h2,
                    color: colors.textGray,
                    marginBottom: 40
                }}
            >
                {typeofProduct.nameDress} Dress
            </Text>
        </ImageBackground>
    </View>;
}
