import React from 'react'
import { View, Text, Image, LogBox } from 'react-native'
import ImageSlider from 'react-native-image-slider';

// Styles + Icon
import stylesHome from '../../assets/styles/homeScreens.style'

// Data fake
import { IMAGES } from '../../mock/DataSildeHome'


export default function SlideHeader() {

   return (
      <View style={stylesHome.slider}>
         <ImageSlider
            style={stylesHome.sliderImage}
            loopBothSides
            autoPlayWithInterval={3000}
            images={IMAGES}
         />
      </View>
   )
}