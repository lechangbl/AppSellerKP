import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main, Authentication, OderHistory, ChangeInfo } from './src/screens'

const Stack = createNativeStackNavigator();

const App = () => {
   return (
      <SafeAreaView style={{ flex: 1 }}>
         <StatusBar hidden />
         <NavigationContainer>
            <Stack.Navigator
               initialRouteName='Main'
               screenOptions={{
                  headerShown: false
               }}
            >
               <Stack.Screen
                  name="Main"
                  component={Main}
               />
               <Stack.Screen
                  name="Authentication"
                  component={Authentication}
               />
               <Stack.Screen
                  name="ChangeInfo"
                  component={ChangeInfo}
               />
               <Stack.Screen
                  name="OderHistory"
                  component={OderHistory}
               />
            </Stack.Navigator>
         </NavigationContainer>
      </SafeAreaView>
   );
}

export default App