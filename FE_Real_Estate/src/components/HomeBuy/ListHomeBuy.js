import React from 'react'

import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { StylesHomeBuy } from '../../assets/styles/HomeBuyScreens'
import Icon from 'react-native-vector-icons/AntDesign'
import IconEvilIcons from 'react-native-vector-icons/EvilIcons'
import { actGetPostDetail } from '../../store/Post/action'
import { VALUE, UNIT_VALUE } from '../../contants'
import { useNavigation } from '@react-navigation/native'

export default function ListHomeBuy({ listPostBuy }) {
   const navigation = useNavigation()
   const dispatch = useDispatch()
   const handlePostDetail = () => {
      dispatch(actGetPostDetail(listPostBuy))
      navigation.navigate('ListDetail')
   }
   return (
      <View style={StylesHomeBuy.listPostCart}>
         <View style={StylesHomeBuy.unitPost}>
            {
               listPostBuy && listPostBuy.kind === "Cần Bán" ?
                  <View>
                     <Image style={StylesHomeBuy.imgArrow} source={require('../../assets/images/downarrow.png')} />
                     <Text style={StylesHomeBuy.textColor}>Bán</Text>
                  </View>
                  :
                  <View>
                     <Image style={StylesHomeBuy.imgArrow} source={require('../../assets/images/downarrow2.png')} />
                     <Text style={[StylesHomeBuy.textColor, { fontSize: 8 }]}>Thuê</Text>
                  </View>
            }
         </View>
         <TouchableOpacity style={StylesHomeBuy.cardList} onPress={handlePostDetail} >

            <View style={StylesHomeBuy.dialogHome}></View>
            <View style={StylesHomeBuy.imgPost}>
               {
                  listPostBuy && listPostBuy.image.length !== 0 ?
                     <Image style={StylesHomeBuy.imgList}
                        source={{ uri: listPostBuy.image[0] }}
                     />
                     :
                     <Image style={StylesHomeBuy.imgList}
                        source={{ uri: "https://shareprogramming.net/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png" }}
                     />
               }
            </View>
            <View style={StylesHomeBuy.contactCart}>
               <View style={StylesHomeBuy.contactLeft}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                     <IconEvilIcons color="#7f8c8d" name="location" size={20} style={{ marginLeft: 10 }} />
                     <Text numberOfLines={1} style={StylesHomeBuy.textAddress}>{listPostBuy && listPostBuy.title}</Text>
                  </View>
                  {
                     listPostBuy && listPostBuy.name !== VALUE.LAND ?
                        <View style={StylesHomeBuy.valueHome}>
                           <Text style={StylesHomeBuy.textBed}> <Text style={StylesHomeBuy.numbertext}>{listPostBuy && listPostBuy.numberbed}</Text> Beds</Text>
                           <Text style={StylesHomeBuy.textBed}> <Text style={StylesHomeBuy.numbertext}>{listPostBuy && listPostBuy.numberbath}</Text> Baths</Text>
                           <Text style={StylesHomeBuy.textBed}> <Text style={StylesHomeBuy.numbertext}>{listPostBuy && listPostBuy.size}</Text> Area(m2)</Text>
                        </View>
                        :
                        <View style={{ justifyContent: "flex-start", alignItems: "flex-start", marginLeft: 10 }}>
                           <Text style={StylesHomeBuy.textBed}> <Text style={StylesHomeBuy.numbertext}>{listPostBuy && listPostBuy.size}</Text> Area(m2)</Text>
                        </View>
                  }
               </View>

               <View style={StylesHomeBuy.prices}>
                  <Text numberOfLines={1} style={StylesHomeBuy.textPrices}>
                     {listPostBuy && listPostBuy.price !== 0 && listPostBuy.price}
                  </Text>
                  <Text style={{ color: "#a2a4ae", marginLeft: 2, fontSize: 12 }}>{listPostBuy && listPostBuy.unit}</Text>
                  {
                     listPostBuy && listPostBuy.kind === VALUE.RENT && listPostBuy.unit !== UNIT_VALUE.THOA_THUAN ?
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