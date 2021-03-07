import React from 'react'
import { View, Text, Image, StatusBar, ImageBackground, LogBox } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { FormLogin } from '../../components/loginScreens'
import stylesIndexLogin from '../../assets/styles/indexLogin.style'

export default function LoginScreens() {
   LogBox.ignoreAllLogs();
   return (
      <View style={stylesIndexLogin.container}>
         <View style={stylesIndexLogin.header}>
            <Image
               style={stylesIndexLogin.background}
               source={require('../../assets/images/Splash.jpg')}
               resizeMode="cover"
            />
         </View>
         <FormLogin />
      </View>
   )
}