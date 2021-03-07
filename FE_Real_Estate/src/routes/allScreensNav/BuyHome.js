import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()

import ProfileDetail from '../../screens/profileDetail'
import PostDetail from '../../screens/postDetail'
import HomeBuyScreen from '../../screens/HomeBuy'

export default function () {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false }} >
         <Stack.Screen name="HomeBuyScreen" component={HomeBuyScreen} />
         <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
         <Stack.Screen name="ListDetail" component={PostDetail} />
      </Stack.Navigator>
   )
}