import React from 'react';
import {
   statusbar
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
   Main, Authentication, OderHistory, ChangeInfo, Header
} from './src/screens'




const Stack = createNativeStackNavigator();

const App = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator
            initialRouteName='Main'
         >
            <Stack.Screen
               options={{
                  headerShown: false
               }}

               name="Main"
               component={Main}
            />
            <Stack.Screen
               options={{
                  headerShown: false
               }}
               name="Authentication"
               component={Authentication}
            />
            <Stack.Screen
               options={{
                  headerShown: false
               }}
               name="ChangeInfo"
               component={ChangeInfo}
            />
            <Stack.Screen
               options={{
                  headerShown: false
               }}
               name="OderHistory"
               component={OderHistory}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
}

export default App