import React from 'react'
import LoginScreens from '../../screens/login'
import RegisterScreens from '../../screens/register'

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()

export default function () {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false }} >
         <Stack.Screen name="Login" component={LoginScreens} />
         <Stack.Screen name="Register" component={RegisterScreens} />
      </Stack.Navigator>
   )
}