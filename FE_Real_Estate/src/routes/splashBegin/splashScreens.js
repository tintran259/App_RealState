import React, { useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { stylesSplash } from '../../assets/styles/splash.styles'
import { useDispatch } from 'react-redux'
import { actHideSplash } from '../../store/App/action'
export default function SplashScreens() {
   const dispatch = useDispatch();
   useEffect(() => {
      setTimeout(() => {
         dispatch(actHideSplash())
      }, 3000)
   }, [])
   return (
      <View style={stylesSplash.container}>
         <Image style={stylesSplash.img} source={require("../../assets/images/Splash.jpg")} />
      </View>
   )
}