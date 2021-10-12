import React from "react";
import {
    Text, View, Image
} from 'react-native'

import {
    colors
} from '../../../themes'
import { BtnItem } from "./BtnItem";
import { styles } from "./styles";
const MenuSignin = () => {
    const avatar = require('../../../media/avatar/taylor.jpg')
    const username = 'Le Van Chang'

    return (
        <View style={styles.container} >
            <View>
                <Image
                    source={avatar}
                    style={styles.avatarStyle}
                />
            </View>

            <View
                style={{
                    flex: 1,
                    width: '100%',
                    alignItems: 'center'
                }}
            >
                <Text
                    style={styles.textUsername}
                >
                    {username}
                </Text>

                <View
                    style={styles.btnStyle}
                >
                    <BtnItem title='Oder History' />
                    <BtnItem title='Change Info' />
                    <BtnItem title='Sign Out' />
                </View>
            </View>
        </View>
    );
}

export default MenuSignin
