import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import stylesHome from '../../assets/styles/homeScreens.style'


export default function ModeScreens() {
   const navigation = useNavigation()
   const handleModeSearch = () => {
      navigation.navigate('Search', { screen: 'Search' })
   }
   const handleModePost = () => {
      navigation.navigate('CreatePost')
   }
   const handleModeBuyHouse = () => {
      navigation.navigate('Buy')
   }
   const handleModeRentHouse = () => {
      navigation.navigate('Rent')
   }
   return (
      <View style={stylesHome.mode}>
         <View style={stylesHome.mode_con}>
            <View style={stylesHome.lane1}>
               <TouchableOpacity
                  style={stylesHome.post}
                  onPress={handleModePost}
               >
                  <Image
                     style={{ width: 40, height: 40 }}
                     source={require("../../assets/images/writing.png")}
                  />
                  <Text style={stylesHome.postText}>Đăng tin</Text>
               </TouchableOpacity>
               <TouchableOpacity
                  style={stylesHome.buy}
                  onPress={handleModeBuyHouse}
               >
                  <Image style={{ width: 40, height: 40 }} source={require("../../assets/images/buy.png")} />
                  <Text numberOfLines={2} style={stylesHome.buyText}>Mua bán chung cư hoặc nhà đất</Text>
               </TouchableOpacity>
               <TouchableOpacity style={stylesHome.rent}
                  onPress={handleModeRentHouse}
               >
                  <Image style={{ width: 40, height: 40 }} source={require("../../assets/images/rent.png")} />
                  <Text numberOfLines={2} style={stylesHome.rentText}>Cho thuê chung cư</Text>
               </TouchableOpacity>
               <TouchableOpacity
                  style={stylesHome.post}
                  onPress={handleModeSearch}
               >
                  <Image style={{ width: 35, height: 35 }} source={require("../../assets/images/searchHouse.png")} />
                  <Text style={stylesHome.searchText}>Tìm kiếm</Text>
               </TouchableOpacity>
            </View>
            <View style={stylesHome.lane2}>
            </View>
         </View>
      </View>
   )
}