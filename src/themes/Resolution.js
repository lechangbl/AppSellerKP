import {
    Dimensions
} from 'react-native'
import { create } from "react-native-pixel-perfect"

const WIDTH = Dimensions.get('window').width
const HIGHT = Dimensions.get('window').height

const designResolution = {
    width: WIDTH,
    height: HIGHT
}
const perfectSize = create(designResolution)
export { perfectSize }