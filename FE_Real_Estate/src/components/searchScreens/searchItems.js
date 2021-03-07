import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'



import { StylesSearchItems } from '../../assets/styles/searchScreens'
import Icon from 'react-native-vector-icons/AntDesign'
import IconEvilIcons from 'react-native-vector-icons/EvilIcons'
import { VALUE, UNIT_VALUE } from '../../contants'

import { actGetPostDetail } from '../../store/Post/action'

export default function SearchItems({ listPostSearch, navigation }) {
   //
   const dispatch = useDispatch()
   const handlePostDetail = () => {
      dispatch(actGetPostDetail(listPostSearch))
      navigation.navigate('ListDetail')
   }
   return (
      <View style={StylesSearchItems.listPostCart}>
         <View style={StylesSearchItems.unitPost}>
            {
               listPostSearch && listPostSearch.kind === VALUE.BUY ?
                  <View>
                     <Image style={StylesSearchItems.imgArrow} source={require('../../assets/images/downarrow.png')} />
                     <Text style={StylesSearchItems.textColor}>Bán</Text>
                  </View>
                  :
                  <View>
                     <Image style={StylesSearchItems.imgArrow} source={require('../../assets/images/downarrow2.png')} />
                     <Text style={[StylesSearchItems.textColor, { fontSize: 8 }]}>Thuê</Text>
                  </View>
            }
         </View>
         <TouchableOpacity style={StylesSearchItems.cardList} onPress={handlePostDetail} >
            <Icon name="heart" style={StylesSearchItems.iconheart} />
            <View style={StylesSearchItems.dialogHome}></View>
            <View style={StylesSearchItems.imgPost}>
               <Image style={StylesSearchItems.imgList}
                  source={require("../../assets/images/defaultImage.png")}
               />
            </View>
            <View style={StylesSearchItems.Count}>
               <Icon name="heart" style={StylesSearchItems.iconCount} />
               <Text style={{ color: "#000", fontWeight: "bold" }}>2</Text>
            </View>
            <View style={StylesSearchItems.contactCart}>
               <View style={StylesSearchItems.contactLeft}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                     <IconEvilIcons color="#7f8c8d" name="location" size={20} style={{ marginLeft: 10 }} />
                     <Text numberOfLines={1} style={StylesSearchItems.textAddress}>{listPostSearch && listPostSearch.adress}</Text>
                  </View>
                  <View style={StylesSearchItems.valueHome}>
                     <Text style={StylesSearchItems.textBed}> <Text style={StylesSearchItems.numbertext}>{listPostSearch && listPostSearch.numberbed}</Text> Beds</Text>
                     <Text style={StylesSearchItems.textBed}> <Text style={StylesSearchItems.numbertext}>{listPostSearch && listPostSearch.numberbath}</Text> Baths</Text>
                     <Text style={StylesSearchItems.textBed}> <Text style={StylesSearchItems.numbertext}>{listPostSearch && listPostSearch.size}</Text> Area</Text>
                  </View>
               </View>

               <View style={StylesSearchItems.prices}>
                  <Text numberOfLines={1} style={StylesSearchItems.textPrices}>
                     {listPostSearch && listPostSearch.price !== 0 && listPostSearch.price}
                  </Text>
                  <Text style={{ color: "#a2a4ae", marginLeft: 2, fontSize: 12 }}>{listPostSearch && listPostSearch.unit}</Text>
                  {
                     listPostSearch && listPostSearch.kind === VALUE.RENT && listPostSearch.unit !== UNIT_VALUE.THOA_THUAN ?
                        <Text style={{ color: "#a2a4ae", fontSize: 12 }}>/month</Text>
                        :
                        <Text style={{ display: "none" }}></Text>
                  }
               </View>
            </View>
         </TouchableOpacity>
      </View>
   )
}