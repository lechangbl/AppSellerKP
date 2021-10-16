import { StyleSheet } from 'react-native';
import { colors } from '../../../themes';
import { perfectSize } from '../../../themes';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundGreen,
        alignItems: 'center'
    },
    avatarStyle: {
        height: perfectSize(200),
        width: perfectSize(200),
        borderRadius: perfectSize(100),
        margin: perfectSize(20)
    },
    textUsername: {
        fontSize: perfectSize(30),
        color: colors.white
    },
    btnStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    }
});
