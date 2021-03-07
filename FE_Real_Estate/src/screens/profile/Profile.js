import React, { useMemo } from 'react'
import { ScrollView, View, Text, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { ListUserPost, Header } from '../../components/profile'
import stylesProfile from '../../assets/styles/profile.style'
import { ListHomeBuy } from '../../components/HomeBuy'
import { ListPostHome } from '../../components/homScreens'
export default function Profile({ navigation }) {

   const listPostHome = useSelector(state => state.Post.listPost)
   const user = useSelector(state => state.Auth.inforUserLogin)
   console.log("listPostHome", listPostHome);
   console.log('====================================');
   const listPostOfUser = useMemo(() => {
      let list = listPostHome && listPostHome.filter((item) => {
         return item.id_post === user._id
      })
      return list
   }, [listPostHome])
   console.log("listPostOfUser:", listPostOfUser);
   const handlePostNow = () => {
      navigation.navigate('CreatePost')
   }
   const EmptyListUSer = () => {
      return (
         <View style={stylesProfile.empty}>
            <Text style={stylesProfile.titleEmpty}>Bạn chưa có bài viết nào bạn có muốn đăng bài ngay không</Text>
            <TouchableOpacity onPress={handlePostNow} style={stylesProfile.btn_empty}>
               <Text style={stylesProfile.textBtn}>Đăng tin</Text>
            </TouchableOpacity>
         </View>
      )
   }
   return (
      <View style={stylesProfile.container}>
         <ScrollView>
            <Header navigation={navigation} />
            <Text style={stylesProfile.listUserPost}>Tin của bạn</Text>
            <View style={stylesProfile.listProfile}>
               <FlatList
                  data={listPostOfUser}
                  keyExtractor={item => item._id.toString()}
                  renderItem={({ item }) => {
                     return (
                        <ListPostHome postStatus={item} />
                     )
                  }}
                  ListEmptyComponent={EmptyListUSer}
               />
            </View>
         </ScrollView>
      </View>
   )
}