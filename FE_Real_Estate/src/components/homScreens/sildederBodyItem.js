import React from 'react'
import { View, Text, Image } from 'react-native'
import stylesHome from '../../assets/styles/homeScreens.style'



export default function SliderBody({
   postStatus
}) {
   return (
      <View style={stylesHome.sliderSize}>
         <View style={{ marginRight: 10 }}>
            <View style={stylesHome.imgBG}>
               <Text style={stylesHome.textBG}>
                  {postStatus && postStatus.adress}
               </Text>
            </View>
            <Image
               style={stylesHome.cardSlider}
               source={
                  postStatus && postStatus.image !== ""
                     ?
                     { uri: `${postStatus.image[0].linkImage}` }
                     :
                     require('../../assets/images/defaultImage.png')}
            />
            {/* <Image style={stylesHome.cardSlider} source={require('../../assets/images/defaultImage.png')} /> */}
         </View>
      </View>
   )
}