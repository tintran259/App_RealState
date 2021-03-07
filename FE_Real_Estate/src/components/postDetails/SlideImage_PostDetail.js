import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ImageSlider from 'react-native-image-slider';
import { FlatList } from 'react-native-gesture-handler';
import { StylesPostDetail } from '../../assets/styles/postDetails'
import IconFont from 'react-native-vector-icons/FontAwesome'
import Swiper from "react-native-web-swiper";
export default function SilderImagePostDetail({ postDetail }) {
   let Images = postDetail && postDetail.image
   console.log('====================================');
   console.log("Iamge:", Images);
   console.log('====================================');
   return (
      <View>
         <View style={StylesPostDetail.dialogImageSlide}></View>
         <Swiper>
            <Image
               style={StylesPostDetail.ImageSlide}
               source={{ uri: 'https://images.adsttc.com/media/images/59af/7a79/b22e/38b8/4100/00ed/medium_jpg/1.jpg?1504672368' }}
            />
         </Swiper>

         <View style={StylesPostDetail.content}>
            <TouchableOpacity style={StylesPostDetail.titleContent}>
               <IconFont name="location-arrow" style={StylesPostDetail.IconLocation} />
               <Text numberOfLines={2} style={StylesPostDetail.titleAddress}>{postDetail && postDetail.adress}</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}