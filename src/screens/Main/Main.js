import React from 'react'
import Menu from './Menu/Menu';
import Shop from './Shop/Shop';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { perfectSize } from '../../themes';

const Drawer = createDrawerNavigator();

const Main = ({ navigation }) => {
   return (
      <Drawer.Navigator
         screenOptions={{
            drawerStyle: {
               width: perfectSize(300),
            },
            headerShown: false

         }}
         // initialRouteName='Menu'
         drawerContent={(props) => <Menu {...props} />}

      >
         <Drawer.Screen
            name="Shop"
            component={Shop}
         />
      </Drawer.Navigator>
   );
};

export default Main
