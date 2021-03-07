import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()

import ProfileDetail from '../../screens/profileDetail'
import PostDetail from '../../screens/postDetail'
import HomeScreens from '../../screens/home'
import HomeBuy from '../../screens/HomeBuy'
import HomeRent from '../../screens/HomeRent'

export default function HomeScreensNav() {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false }} >
         <Stack.Screen name="home" component={HomeScreens} />
         <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
         <Stack.Screen name="ListDetail" component={PostDetail} />
         <Stack.Screen name="Buy" component={HomeBuy} />
         <Stack.Screen name="Rent" component={HomeRent} />
      </Stack.Navigator>
   )
}