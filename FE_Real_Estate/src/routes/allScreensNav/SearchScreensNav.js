import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()

import ProfileDetail from '../../screens/profileDetail'
import PostDetail from '../../screens/postDetail'
import SearchScreens from '../../screens/search'

export default function SearchScreensNav() {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false }} >
         <Stack.Screen name="Search" component={SearchScreens} />
         <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
         <Stack.Screen name="ListDetail" component={PostDetail} />
      </Stack.Navigator>
   )
}