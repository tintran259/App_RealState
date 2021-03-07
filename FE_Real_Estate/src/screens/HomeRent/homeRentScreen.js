import React, { useMemo } from 'react'
import { Text, View, StatusBar, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { StylesHomeRent } from '../../assets/styles/HomeRentScreens'
import IconAntd from 'react-native-vector-icons/AntDesign'
import { FlatList } from 'react-native-gesture-handler'
import { ListPostHome } from '../../components/homScreens'


export default function HomeRentScreen({ navigation }) {
   const listDataPost = useSelector(state => state.Post.listPost)
   const handleonBack = () => {
      navigation.goBack()
   }

   const listPostBuy = useMemo(() => {
      let newList = listDataPost && listDataPost.filter((item) => {
         return item.kind !== "Cần Bán"
      })
      return newList
   }, [listDataPost])

   return (
      <View style={StylesHomeRent.container}>

         <View style={StylesHomeRent.header}>
            <TouchableOpacity style={StylesHomeRent.btnBack} onPress={handleonBack}>
               <IconAntd color="#2d3436" size={23} name="arrowleft" />
            </TouchableOpacity>
            <Text style={StylesHomeRent.titleHeader}>Cho thuê chung cư và nhà đất</Text>
         </View>
         <View style={StylesHomeRent.body}>
            <Text style={StylesHomeRent.titleBody}>Danh sách</Text>
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