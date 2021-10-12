import React from "react";
import { Text } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from '../../../themes';
import { perfectSize } from "../../../themes";
export const BtnItem = ({ title }) => (
    <TouchableOpacity
        style={{
            height: perfectSize(70),
            width: perfectSize(270),
            backgroundColor: 'white',
            justifyContent: 'center',
            // alignItems: 'center',
            borderRadius: perfectSize(20),
            marginBottom: perfectSize(20),
            paddingHorizontal: perfectSize(20),
        }}
    >
        <Text
            style={{
                fontSize: perfectSize(30),
                color: colors.backgroundGreen
            }}
        >
            {title}
        </Text>
    </TouchableOpacity>
);
