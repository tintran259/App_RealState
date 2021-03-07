import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { UNIT_VALUE, VALUE } from '../../contants'
import stylesHome from '../../assets/styles/homeScreens.style'
import Icon from 'react-native-vector-icons/AntDesign'
import IconEvilIcons from 'react-native-vector-icons/EvilIcons'

import { actGetPostDetail } from '../../store/Post/action'

export default function ListPostHome({ postStatus }) {
   const dispatch = useDispatch();
   const navigation = useNavigation()
   const handlePostItem = () => {
      dispatch(actGetPostDetail(postStatus))
      navigation.navigate('ListDetail')
   }
   const pricesFormart = postStatus.price.toString();
   const length = pricesFormart.length
   const lengthDis = postStatus.unit === UNIT_VALUE.TY ? 9 : postStatus.unit === UNIT_VALUE.TRIEU ? 6 : 3
   return (
      <View style={stylesHome.listPostCart}>
         <View style={stylesHome.unitPost}>
            {
               postStatus && postStatus.kind === "Cần Bán" ?
                  <View>
                     <Image style={stylesHome.imgArrow} source={require('../../assets/images/downarrow.png')} />
                     <Text style={stylesHome.textColor}>Bán</Text>
                  </View>
                  :
                  <View>
                     <Image style={stylesHome.imgArrow} source={require('../../assets/images/downarrow2.png')} />
                     <Text style={[stylesHome.textColor, { fontSize: 8 }]}>Thuê</Text>
                  </View>
            }
         </View>
         <TouchableOpacity style={stylesHome.cardList} onPress={handlePostItem}>

            <View style={stylesHome.dialogHome}></View>
            <View style={stylesHome.imgPost}>
               {
                  postStatus && postStatus.image.length !== 0 ?
                     <Image style={stylesHome.imgList}
                        source={{ uri: `${postStatus.image[0].linkImage}` }}
                     />
                     :
                     <Image style={stylesHome.imgList}
                        source={{ uri: "https://shareprogramming.net/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png" }}
                     />
               }
            </View>
            <View style={stylesHome.contactCart}>
               <View style={stylesHome.contactLeft}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                     <IconEvilIcons color="#2d3436" name="location" size={20} style={{ marginLeft: 10 }} />
                     <Text numberOfLines={1} style={stylesHome.textAddress}>{postStatus && postStatus.adress}</Text>
                  </View>
                  {
                     postStatus && postStatus.name !== VALUE.LAND ?
                        <View style={stylesHome.valueHome}>
                           <Text style={stylesHome.textBed}> <Text style={stylesHome.numbertext}>{postStatus && postStatus.numberbed}</Text> Beds</Text>
                           <Text style={stylesHome.textBed}> <Text style={stylesHome.numbertext}>{postStatus && postStatus.numberbath}</Text> Baths</Text>
                           <Text style={stylesHome.textBed}> <Text style={stylesHome.numbertext}>{postStatus && postStatus.size}</Text> Area(m2)</Text>
                        </View>
                        :
                        <View style={{ justifyContent: "flex-start", alignItems: "flex-start", marginLeft: 10 }}>
                           <Text style={stylesHome.textBed}> <Text style={stylesHome.numbertext}>{postStatus && postStatus.size}</Text> Area(m2)</Text>
                        </View>
                  }
               </View>

               <View style={stylesHome.prices}>
                  <Text numberOfLines={1} style={stylesHome.textPrices}>
                     {pricesFormart.slice(0, length - lengthDis)}
                  </Text>
                  <Text style={{ color: "#a2a4ae", marginLeft: 2, fontSize: 12 }}>{postStatus && postStatus.unit}</Text>
                  {
                     postStatus && postStatus.kind === "Cho Thuê" && postStatus.unit !== UNIT_VALUE.THOA_THUAN ?
                        <Text style={{ color: "#a2a4ae", fontSize: 12 }}>/tháng</Text>
                        :
                        <Text style={{ display: "none" }}></Text>
                  }
               </View>
            </View>
         </TouchableOpacity>
      </View>

   )
}