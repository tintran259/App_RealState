import React, { useMemo } from 'react'
import { Text, View, StatusBar, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { StylesHomeBuy } from '../../assets/styles/HomeBuyScreens'
import IconAntd from 'react-native-vector-icons/AntDesign'
import { FlatList } from 'react-native-gesture-handler'
import { ListPostHome } from '../../components/homScreens'
import { useNavigation } from '@react-navigation/native'

export default function HomeBuyScreen() {
   const navigation = useNavigation()
   const listDataPost = useSelector(state => state.Post.listPost)
   const handleonBack = () => {
      navigation.goBack()
   }

   const listPostBuy = useMemo(() => {
      let newList = listDataPost && listDataPost.filter((item) => {
         return item.kind === "Cần Bán"
      })
      return newList
   }, [listDataPost])

   console.log("listPostBuy:", listPostBuy);

   return (
      <View style={StylesHomeBuy.container}>
         <View style={StylesHomeBuy.header}>
            <TouchableOpacity style={StylesHomeBuy.btnBack} onPress={handleonBack}>
               <IconAntd color="#2d3436" size={23} name="arrowleft" />
            </TouchableOpacity>
            <Text style={StylesHomeBuy.titleHeader}>Bán chung cư và nhà đất</Text>
         </View>
         <View style={StylesHomeBuy.body}>
            <Text style={StylesHomeBuy.titleBody}>Danh sách</Text>
            <FlatList
               contentContainerStyle={{ paddingBottom: 80, paddingTop: 10 }}
               keyExtractor={item => item._id.toString()}
               data={listPostBuy}
               renderItem={({ item }) => {
                  return <ListPostHome postStatus={item} />
               }}
            />
         </View>
      </View>
   )
}