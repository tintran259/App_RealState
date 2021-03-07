import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()

import Profile from '../../screens/profile'
import ProfileEdit from '../../screens/profileEdit'
import ProfileChangePassword from '../../screens/ChangePassword'

export default function () {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false }} >
         <Stack.Screen name="Profile" component={Profile} />
         <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
         <Stack.Screen name="ChangePassword" component={ProfileChangePassword} />
      </Stack.Navigator>
   )
}