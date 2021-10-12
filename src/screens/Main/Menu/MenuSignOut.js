import React from "react";
import {
    View, Image
} from 'react-native'

import { BtnItem } from "./BtnItem";
import { styles } from "./styles";


const MenuSignOut = () => {
    const avatar = require('../../../media/avatar/avatar-placehoder.png')

    return (
        <View
            style={styles.container}
        >
            <View>
                <Image
                    source={avatar}
                    style={styles.avatarStyle}
                />
            </View>
            <View
                style={{
                    margin: 20,
                    justifyContent: 'center',
                }}
            >
                <BtnItem title='Sign In' />
            </View>
        </View>
    );
}

export default MenuSignOut
