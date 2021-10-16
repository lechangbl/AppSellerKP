import React from "react";
import { View, Text, ImageBackground } from 'react-native';
import { colors, fontsize } from "../../../../../themes";
import Swiper from 'react-native-swiper';
import { swiperItem } from "./swiperItem";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles, imageSize } from "./Home";

export function Category(props) {
    const { typeofProduct, TestPressImage } = props
    return <View
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
                alignItems: 'center'
            }}
        >
            <Swiper
                showsPagination
                width={imageSize.width}
                height={imageSize.height}
                loop={false}
                style={{
                    alignItems: 'center',
                }}
            >
                {/* <swiperItem typeofProduct={typeofProduct} /> */}
                {swiperItem(typeofProduct)}

                <View
                    style={styles.swiperStyle}
                >
                    <TouchableOpacity
                        onPress={() => TestPressImage()}
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
                    </TouchableOpacity>
                </View>

            </Swiper>
        </View>

    </View>;
}
