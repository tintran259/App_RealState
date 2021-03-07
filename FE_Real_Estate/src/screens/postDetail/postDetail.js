import React, { useState } from 'react'
import { Image, Text, View, Dimensions, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import { useSelector, } from 'react-redux'
import Communications from 'react-native-communications';
import { TabView, SceneMap } from 'react-native-tab-view';
//Styles + Icon
import { StylesPostDetail } from '../../assets/styles/postDetails'
import IconAntd from 'react-native-vector-icons/AntDesign'
import IconEmtypo from 'react-native-vector-icons/Entypo'
import IconFeather from 'react-native-vector-icons/Feather'
import { TabBath, TabBed } from '../../components/postDetails'
import { useNavigation } from '@react-navigation/native'
import { VALUE, UNIT_VALUE } from '../../contants'
//data fake

import Swiper from "react-native-web-swiper";
import MapView, { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default function PostDetail() {
   const navigation = useNavigation()
   const postDetail = useSelector(state => state.Post.postDetail)
   console.log('====================================');
   console.log("postDetail:", postDetail);
   console.log('====================================');
   const pricesFormart = postDetail.price.toString();
   const length = pricesFormart.length
   console.log("pricesFormart:", pricesFormart);
   console.log("length:", length);
   console.log("Dấd", pricesFormart.slice(0, length - 3));
   const handleGobackDetailScreen = () => {
      navigation.goBack();
   }
   const callPhone = () => Communications.phonecall(`0${postDetail && postDetail.phone.toString()}`, true)
   return (

      <View >
         <StatusBar translucent />
         <View style={StylesPostDetail.header}>
            <TouchableOpacity style={StylesPostDetail.btnBack} onPress={handleGobackDetailScreen} >
               <IconAntd name="left" style={StylesPostDetail.iconBack} />
            </TouchableOpacity>
         </View>
         <View style={StylesPostDetail.phone}>
            <TouchableOpacity style={StylesPostDetail.btnCall} onPress={callPhone}>
               <IconFeather name="phone-call" style={StylesPostDetail.iconCALL} />
            </TouchableOpacity>
         </View>
         <ScrollView>
            <View style={StylesPostDetail.container}>
               <Swiper>
                  {
                     postDetail && postDetail.image.length !== 0
                        ?
                        postDetail && postDetail.image.map((item, index) => {
                           console.log(item.linkImage);
                           return (
                              <View key={index} style={StylesPostDetail.slideContainer}>
                                 <Image
                                    style={StylesPostDetail.imageSlide}
                                    source={{ uri: `${item.linkImage}` }}
                                 />
                              </View>
                           )
                        })
                        :
                        <View style={StylesPostDetail.slideContainer}>
                           <Image
                              style={StylesPostDetail.imageSlide}
                              source={{ uri: `https://shareprogramming.net/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png` }}
                           />
                        </View>
                  }
               </Swiper>
            </View>
            <View style={StylesPostDetail.body}>
               <Text style={StylesPostDetail.title}>{postDetail && postDetail.title}</Text>
               <View style={StylesPostDetail.address}>
                  <IconEmtypo name="location" style={StylesPostDetail.iconLocation} />
                  <Text style={StylesPostDetail.textAddress}>{postDetail && postDetail.adress}</Text>
               </View>
               <View style={StylesPostDetail.contentDetail}>
                  <Text style={StylesPostDetail.titleDetail}>Người đăng:</Text>
                  <Text style={[StylesPostDetail.textDetail, { textTransform: "capitalize", }]}>{postDetail && postDetail.name_user}</Text>
               </View>
               <View style={StylesPostDetail.contentDetail}>
                  <Text style={StylesPostDetail.titleDetail}>Mô tả:</Text>
                  <Text style={StylesPostDetail.textDetail}>{postDetail && postDetail.decription}</Text>
               </View>
               <View style={StylesPostDetail.contentDetail}>
                  <Text style={StylesPostDetail.titleDetail}>Nội dung:</Text>
                  <Text style={StylesPostDetail.textDetail}>{postDetail && postDetail.content}</Text>
               </View>
               <View style={StylesPostDetail.Custom}>
                  <View style={StylesPostDetail.itemCustom}>
                     <Image source={require("../../assets/images/bed.png")} />
                     <Text style={StylesPostDetail.textCustom}>{postDetail && postDetail.numberbed} phòng</Text>
                  </View>
                  <View style={StylesPostDetail.itemCustom}>
                     <Image source={require("../../assets/images/bath.png")} />
                     <Text style={StylesPostDetail.textCustom}>{postDetail && postDetail.numberbath} phòng</Text>
                  </View>
                  <View style={StylesPostDetail.itemCustom}>
                     <Image source={require("../../assets/images/area.png")} />
                     <Text style={StylesPostDetail.textCustom}>{postDetail && postDetail.size}m2</Text>
                  </View>
               </View>
            </View>

         </ScrollView>
      </View>
   )
}