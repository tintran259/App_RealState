import React, { useEffect } from 'react'
import { View, Text, ScrollView, Image, StatusBar, FlatList, Dimensions, LogBox } from 'react-native'
import { SlideHome, ModeScreens, SliderBody, ListPostHome } from '../../components/homScreens'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import stylesHome from '../../assets/styles/homeScreens.style'

import { asyncGetListPost } from '../../store/Post/action'
import { actPostUnSuccessed } from '../../store/App/action'
export default function HomeScreens() {
   LogBox.ignoreAllLogs();
   const navigation = useNavigation()
   const dispatch = useDispatch();
   const listDataPost = useSelector(state => state.Post.listPost)
   const updatePost = useSelector(state => state.App.isPost)
   console.log('====================================');
   console.log('listDataPost', listDataPost);
   console.log('====================================');
   useEffect(() => {
      dispatch(asyncGetListPost())
   }, [updatePost])
   const listEmpty = () => {
      return (
         <View>
            <Text>Empty</Text>
         </View>
      )
   }
   return (
      <ScrollView>
         <View style={stylesHome.container}>
            {/* header homeScreens */}
            <View style={{ height: Dimensions.get('screen').height - 200 }}>
               <View style={stylesHome.dialogHeader}></View>
               <Image style={stylesHome.imgHeader} source={require('../../assets/images/imgHeader.jpg')} resizeMode="cover" />
               <View style={stylesHome.headerControl}>
                  <Image style={stylesHome.logoHeader} source={require('../../assets/images/king2.png')} />
                  <Text style={stylesHome.fontText}>King Real Estate</Text>
               </View>
            </View>
            {/* end ===================== */}
            <View style={{ flex: 1 }}>
               <ModeScreens navigation={navigation} />
               <View style={stylesHome.SliderBody}>
                  {/* Tin Noi Bat Slide ========================= */}
                  <Text style={stylesHome.titleSlider}>Tin nổi bật: </Text>
                  <FlatList
                     horizontal
                     data={listDataPost}
                     keyExtractor={item => item._id.toString()}
                     renderItem={({ item }) => {
                        return (
                           <SliderBody postStatus={item} />
                        )
                     }}
                     ListEmptyComponent={listEmpty}
                  />

               </View>
               <View style={stylesHome.bodyList}>
                  {/* List danh sach Tin Duoc Dang =============== */}
                  <Text style={stylesHome.titleBodyHome}>Danh sách tin:</Text>
                  <FlatList
                     data={listDataPost}
                     keyExtractor={item => item._id.toString()}
                     renderItem={({ item }) => {
                        return (
                           <ListPostHome postStatus={item} navigation={navigation} />
                        )
                     }}
                     ListEmptyComponent={listEmpty}
                  />
               </View>
            </View>
         </View>
      </ScrollView>
   )
}