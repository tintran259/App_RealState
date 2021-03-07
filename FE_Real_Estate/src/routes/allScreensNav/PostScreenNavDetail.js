import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()

import ProfileDetail from '../../screens/profileDetail'
import PostDetail from '../../screens/postDetail'
import ListItemsChoose from '../../screens/listItemsChoose'

export default function SearchScreensNav() {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false }} >
         <Stack.Screen name="ListItemsChoose" component={ListItemsChoose} />
         <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
         <Stack.Screen name="ListDetail" component={PostDetail} />
      </Stack.Navigator>
   )
}