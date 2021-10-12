import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import iconIMG from '../../../../media/appIcon';
import { styles } from "./SignIn";

export function SignHeader() {
    return <View style={styles.viewHeader}>
        <TouchableOpacity
        >
            <Image
                source={iconIMG.IcBackWhite}
                style={styles.styleIMG} />
        </TouchableOpacity>

        <Text style={styles.styleTextTitle}>
            Wearing a Dress
        </Text>

        <TouchableOpacity
            onPress={() => console.log('logo')}
        >
            <Image
                source={iconIMG.IcLogo}
                style={styles.styleIMG} />
        </TouchableOpacity>

    </View>;
}
