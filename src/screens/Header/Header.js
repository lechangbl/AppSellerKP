import React from 'react'
import {
    Text, TouchableOpacity, View, Image, TextInput, StyleSheet
} from 'react-native'
import {
    colors, fontsize
} from '../../themes'
import { perfectSize } from '../../themes'
import iconIMG from '../../media/appIcon'

const Header = (props) => {
    const title = 'Wearing a Dress!'

    const openDawer = () => { props.Open() }
    return (
        <View style={styles.container}>

            <View style={styles.viewMain}>
                <TouchableOpacity
                    onPress={openDawer}
                >
                    <Image
                        source={iconIMG.IcMenu}
                        style={styles.styleIMG}
                    />
                </TouchableOpacity>

                <Text style={styles.styleTextTitle}>
                    {title}
                </Text>

                <TouchableOpacity
                    onPress={() => console.log('logo')}
                >
                    <Image
                        source={iconIMG.IcLogo}
                        style={styles.styleIMG}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TextInput
                    style={styles.styleTextInput}
                    placeholder="What do you want to buy?"
                />
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundGreen,
        height: perfectSize(130),
    },
    viewMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginTop: perfectSize(10)
    },
    styleIMG: {
        height: perfectSize(40),
        width: perfectSize(40),
        margin: perfectSize(12)
    },
    styleTextTitle: {
        fontSize: fontsize.h2,
        color: colors.white,
        fontWeight: 'bold'
    },
    styleTextInput: {
        width: perfectSize(390),
        padding: perfectSize(10),
        height: perfectSize(45),
        backgroundColor: 'white',
        fontSize: perfectSize(22)
    }
})
export default Header
