import React from "react";
import {
    Text, View
} from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import {
    Header
} from '../../../screens'
const Menu = ({ navigation }) => {
    const open = () => { navigation.openDrawer() }


    return (
        <View
            style={{

            }}
        >
            <Header Open={open} />

            <Text>
                MENU
            </Text>
        </View>
    )
}

export default Menu
