import React from "react";
import {
    Text, View
} from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import {
    Header
} from '../../../screens'
const Shop = ({ navigation }) => {
    const open = () => { navigation.openDrawer() }


    return (
        <View>
            <Header Open={open} />
            <View
                style={{
                    flex: 1,
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    backgroundColor: 'pink'
                }}
            >
            </View>
            <Text>
                SHOP
            </Text>
        </View>
    )
}

export default Shop
