import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import SearchScreensNav from '../allScreensNav/SearchScreensNav'
import PostScreensNav from '../allScreensNav/PostScreenNavDetail'
import PostScreens from '../../screens/post'
import Profile from '../allScreensNav/Profile'
import HomeStack from '../allScreensNav/HomeStack'
import IconAntd from 'react-native-vector-icons/AntDesign'
import HomeBuy from '../../screens/HomeBuy'
import HomeRent from '../../screens/HomeRent'
const Tab = createBottomTabNavigator()

export default function RootTabScreens() {
   return (
      <Tab.Navigator
         tabBarOptions={{
            activeTintColor: '#fff',
            inactiveTintColor: '#3498db',
            activeBackgroundColor: "#3498db",
            inactiveBackgroundColor: "#ffff",
            style: {
               borderTopLeftRadius: 10,
               borderTopRightRadius: 10,
               height: 45
            },
            showLabel: true,
            labelStyle: {
               fontSize: 11
            }
         }}
      >
         <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
               tabBarLabel: 'Trang chủ',
               tabBarIcon: ({ color, size }) => (
                  <IconAntd name="home" color={color} size={20} />
               ),
            }}
         />
         <Tab.Screen
            name="Search"
            component={SearchScreensNav}
            options={{
               tabBarLabel: 'Tìm kiếm',
               tabBarIcon: ({ color, size }) => (
                  <IconAntd name="search1" color={color} size={20} />
               ),
            }}
         />
         <Tab.Screen
            name="CreatePost"
            component={PostScreens}
            options={{
               tabBarLabel: 'Đăng tin',
               tabBarIcon: ({ color, size }) => (
                  <IconAntd name="pluscircleo" color={color} size={20} />
               ),
            }}
         />
         <Tab.Screen
            name="ListPost"
            component={PostScreensNav}
            options={{
               tabBarLabel: 'Yêu thích',
               tabBarIcon: ({ color, size }) => (
                  <IconAntd name="hearto" color={color} size={20} />
               ),
            }}
         />
         <Tab.Screen
            name="Profileall"
            component={Profile}
            options={{
               tabBarLabel: 'Cá nhân',
               tabBarIcon: ({ color, size }) => (
                  <IconAntd name="user" color={color} size={20} />
               ),
            }}
         />
      </Tab.Navigator >
   )
}