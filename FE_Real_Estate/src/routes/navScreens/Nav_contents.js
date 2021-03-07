import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import stylesNav from './Nav_Content.styled'
import Icon from 'react-native-vector-icons/Ionicons'
import IconAnt from 'react-native-vector-icons/AntDesign'

export default function NavContent({ navigation }) {
   return (
      <View style={stylesNav.nav}>
         <Icon
            onPress={() => navigation.navigate('Home')}
            name="home-outline"
            size={25}
            style={stylesNav.IconHome}

         />
         <IconAnt
            onPress={() => navigation.navigate('Search')}
            name="search1"
            size={25}
            style={stylesNav.IconHome}
         />
         <IconAnt
            onPress={() => navigation.navigate('CreatePost')}
            name="plussquareo"
            size={25}
            style={stylesNav.IconHome}
            color="#3498db"

         />
         <IconAnt
            onPress={() => navigation.navigate('ListPost')}
            name="hearto"
            size={25}
            style={stylesNav.IconHome}
         />
         <IconAnt
            onPress={() => navigation.navigate('Profileall')}
            name="contacts"
            size={25}
            style={stylesNav.IconHome}
         />
      </View>
   )
}