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
        <View style={{ flex: 1 }}
        >
            <Header Open={open} />
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'gray'
                }}
            >
                <Text>
                    MENU
                </Text>
            </View>
        </View>
    )
}

export default Menu
