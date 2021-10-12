import React from 'react'
import Menu from './Menu/Menu';
import Shop from './Shop/Shop';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { perfectSize } from '../../themes';
import SignInNow from './Menu/sign/SignInNow';
import SignUpNow from './Menu/sign/SignUpNow';
import SignIn from './Menu/sign/SignIn';


const Drawer = createDrawerNavigator();

const Main = ({ navigation }) => {
   return (
      <Drawer.Navigator
         screenOptions={{
            drawerStyle: {
               width: perfectSize(350),
            },
            headerShown: false

         }}
         drawerContent={() => <Menu />}
      >
         <Drawer.Screen
            name="Shop"
            component={SignIn}
         />
      </Drawer.Navigator>
   );
};

export default Main
