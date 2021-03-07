import React, { useState, useEffect, useMemo } from 'react'
import {
   View,
   Text,
   Image,
   FlatList,
   TextInput,
   StatusBar,
   ScrollView,
} from 'react-native'
import { useSelector } from 'react-redux'
import DropDown from 'react-native-dropdown-picker';
import { SearchItems } from '../../components/searchScreens'
import Slider from "react-native-slider";

import { StylesSearchScreens, StylesSearchText } from '../../assets/styles/searchScreens'
import IconAntd from 'react-native-vector-icons/AntDesign'

import { UNIT_VALUE, VALUE } from '../../contants'
import { ListPostHome } from '../../components/homScreens'
export default function SearchScreen({ navigation }) {

   const listDataPost = useSelector(state => state.Post.listPost)

   const [searchText, setSearchText] = useState("")
   //==============State Dropdown First
   const [valueCategory, setValueCategory] = useState(VALUE.APARTMENT)
   const [valueKind, setValueKind] = useState(VALUE.BUY)
   const [valueUnitPrices, setValueUnitPrices] = useState(UNIT_VALUE.THOA_THUAN)
   const [valuePrices, setValuePrices] = useState(0)
   const listPricesMaxMinUnitTy = useMemo(() => {
      let newArr = listDataPost && listDataPost.filter((item) => {
         return item.unit === UNIT_VALUE.TY
      })
      let arrTy = newArr.map((item) => {
         const pricesFormart = item.price.toString();
         const length = pricesFormart.length
         const lengthDis = item.unit === UNIT_VALUE.TY ? 9 : item.unit === UNIT_VALUE.TRIEU ? 6 : 3
         const priceFormat = pricesFormart.slice(0, length - lengthDis)
         return priceFormat
      })
      return arrTy
   }, [listDataPost])

   const listPricesMaxMinUnitTrieu = useMemo(() => {
      let newArr = listDataPost && listDataPost.filter((item) => {
         return item.unit === UNIT_VALUE.TRIEU
      })
      let arrTy = newArr.map((item) => {
         const pricesFormart = item.price.toString();
         const length = pricesFormart.length
         const lengthDis = item.unit === UNIT_VALUE.TY ? 9 : item.unit === UNIT_VALUE.TRIEU ? 6 : 3
         const priceFormat = pricesFormart.slice(0, length - lengthDis)
         return priceFormat
      })
      return arrTy
   }, [listDataPost])


   const MaxPricesInUnitTy = Math.max.apply(Math, listPricesMaxMinUnitTy.length !== 0 ? listPricesMaxMinUnitTy : [1]);
   const MinPricesInUnitTy = Math.min.apply(Math, listPricesMaxMinUnitTy.length !== 0 ? listPricesMaxMinUnitTy : [0]);
   const MaxPricesInUnitTrieu = Math.max.apply(Math, listPricesMaxMinUnitTrieu.length !== 0 ? listPricesMaxMinUnitTrieu : [1]);
   const MinPricesInUnitTrieu = Math.min.apply(Math, listPricesMaxMinUnitTrieu.length !== 0 ? listPricesMaxMinUnitTrieu : [0]);

   useEffect(() => {
      if (valueUnitPrices === UNIT_VALUE.THOA_THUAN) {
         setValuePrices(0)
      } else if (valueUnitPrices === UNIT_VALUE.TRIEU && listPricesMaxMinUnitTrieu !== []) {
         setValuePrices(MinPricesInUnitTrieu)
      } else if (valueUnitPrices === UNIT_VALUE.TY && listPricesMaxMinUnitTy.length !== 0) {
         setValuePrices(MinPricesInUnitTy)
      }
      else {
         setValuePrices(0)
      }
   }, [valueUnitPrices])

   //Sort Basic
   const listDataSearch = useMemo(() => {
      let newList = listDataPost && listDataPost.filter((item) => {
         return item.adress.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      })
      return newList
   }, [searchText, listDataPost])
   const listDataSortApament = useMemo(() => {
      let newArr = listDataSearch && listDataSearch.filter((item) => {
         return item.name === valueCategory
      })
      return newArr
   }, [valueCategory, listDataSearch])
   const listDataSortRentorBuy = useMemo(() => {
      let newArr = listDataSortApament && listDataSortApament.filter((item) => {
         return item.kind === valueKind
      })
      return newArr
   }, [valueKind, listDataSortApament])
   const listDataSortPrices = useMemo(() => {
      let newArr = listDataSortRentorBuy && listDataSortRentorBuy.filter((item) => {
         return item.unit === valueUnitPrices
      })
      return newArr
   }, [valueUnitPrices, listDataSortRentorBuy])
   const listDataSortValuePrices = useMemo(() => {
      let newArr = listDataSortPrices && listDataSortPrices.filter((item) => {
         const lengthDis = item.unit === UNIT_VALUE.TY ? 1000000000 : item.unit === UNIT_VALUE.TRIEU ? 1000000 : 1000
         return item.price <= valuePrices * lengthDis
      })
      return newArr
   }, [listDataSortPrices, valuePrices])

   // Logic 
   const EmptyView = () => {
      return (
         <View style={{ flexDirection: "column", alignItems: "center", marginTop: "50%" }}>
            <Image source={require('../../assets/images/emptyfolder.png')} />
            <Text style={{ color: "#636E72", marginTop: 10, letterSpacing: 1 }}>Not Found</Text>
         </View>
      )
   }
   return (
      <View style={StylesSearchScreens.container}>
         {/* Header */}
         <View style={StylesSearchScreens.header}>
            {/* <IconAntd style={StylesSearchScreens.iconSearch} name="search1" size={20} /> */}
            <Text style={StylesSearchScreens.titleHeader}>Tìm kiếm</Text>
         </View>
         {/* body */}
         <ScrollView>
            <View style={StylesSearchText.headerSearchText}>
               <TextInput
                  value={searchText}
                  onChangeText={text => setSearchText(text)}
                  style={StylesSearchText.inputSearch}
                  placeholder="Bạn cần gì ?"
               />
            </View>
            <View style={StylesSearchScreens.dropDown}>
               <DropDown style={{ width: 100, borderColor: "#ecf0f1" }} dropDownStyle={{ width: 100 }}
                  items={[
                     { label: VALUE.APARTMENT, value: VALUE.APARTMENT },
                     { label: VALUE.LAND, value: VALUE.LAND }
                  ]}
                  onChangeItem={item => setValueCategory(item.value)}
                  defaultValue={valueCategory}
               />
               <DropDown style={{ width: 110, borderColor: "#ecf0f1" }} dropDownStyle={{ width: 110 }}
                  items={[
                     { label: VALUE.BUY, value: VALUE.BUY },
                     { label: VALUE.RENT, value: VALUE.RENT }
                  ]}
                  onChangeItem={item => setValueKind(item.value)}
                  defaultValue={valueKind}
               />
               <DropDown style={{ width: 110, borderColor: "#ecf0f1" }} dropDownStyle={{ width: 110, }}
                  items={[
                     { label: UNIT_VALUE.THOA_THUAN, value: UNIT_VALUE.THOA_THUAN },
                     { label: UNIT_VALUE.TRIEU, value: UNIT_VALUE.TRIEU },
                     { label: UNIT_VALUE.TY, value: UNIT_VALUE.TY }
                  ]}
                  onChangeItem={item => setValueUnitPrices(item.value)}
                  defaultValue={valueUnitPrices}
               />
            </View>
            <View style={StylesSearchScreens.slider}>
               <Text style={StylesSearchScreens.textSlider}>Giá:</Text>
               <Slider
                  disabled={valueUnitPrices === UNIT_VALUE.THOA_THUAN ? true : false}
                  value={valuePrices}
                  minimumValue={valueUnitPrices === UNIT_VALUE.TY ? MinPricesInUnitTy : MinPricesInUnitTrieu}
                  maximumValue={valueUnitPrices === UNIT_VALUE.TY ? MaxPricesInUnitTy : MaxPricesInUnitTrieu}
                  thumbTintColor="#2ecc71"
                  thumbStyle={StylesSearchScreens.thumb}
                  trackStyle={StylesSearchScreens.track}
                  style={StylesSearchScreens.sliderCount}
                  onValueChange={(item) => setValuePrices(Math.round(item * 100) / 100)}
               />
               <Text style={StylesSearchScreens.textPrices}>{valuePrices}</Text>
            </View>

            <Text style={StylesSearchScreens.titleListItems}>Danh sách tìm kiếm:</Text>
            <FlatList
               data={listDataSortValuePrices}
               keyExtractor={item => item._id.toString()}
               contentContainerStyle={{ padding: 10 }}
               renderItem={({ item }) => {
                  return (
                     <ListPostHome postStatus={item} navigation={navigation} />
                  )
               }}
               ListEmptyComponent={EmptyView}
            />
         </ScrollView>
      </View>
   )
}