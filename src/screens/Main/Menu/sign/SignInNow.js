import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { TextInput } from "react-native";
import { colors, perfectSize, fontsize } from "../../../../themes";

const SignInNow = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInputstyle}
                placeholder='Enter your Email'
            // onChangeText={onChangeText}
            // value={text}
            />

            <TextInput
                style={styles.textInputstyle}
                placeholder='Enter your Password'
            // onChangeText={onChangeText}
            // value={text}
            />
            <TouchableOpacity
                style={styles.touchableStyle}
            // onChangeText={onChangeText}
            // value={text}
            >
                <Text
                    style={[styles.textBottomTab, { color: colors.backgroundGray }]}
                >
                    SIGN IN OUT
                </Text>
            </TouchableOpacity>
        </View>


    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'yellow',
        // justifyContent: 'center'
        alignItems: 'center',
        marginTop: perfectSize(25)
    },
    textBottomTab: {
        fontSize: fontsize.h2,
        fontWeight: 'bold',
    },
    textInputstyle: {
        backgroundColor: colors.backgroundWhite,
        height: perfectSize(60),
        width: perfectSize(340),
        borderRadius: perfectSize(30),
        marginBottom: perfectSize(25),
        paddingHorizontal: perfectSize(25),
        fontSize: perfectSize(25)
    },
    touchableStyle: {
        // backgroundColor: 'white',
        height: perfectSize(60),
        width: perfectSize(340),
        borderRadius: perfectSize(30),
        marginBottom: perfectSize(25),
        borderWidth: perfectSize(1),
        justifyContent: 'center',
        alignItems: 'center',

        borderColor: colors.backgroundGray
    }
})


export default SignInNow