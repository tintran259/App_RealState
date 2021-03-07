import React from 'react'
import { Text, View, Image } from 'react-native'
import { StylesListPostChoose } from '../../assets/styles/listPostChoose'
import IconAntd from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'


export default function ListPostChoose() {
   const navigation = useNavigation()
   return (
      <View style={StylesListPostChoose.container}>
         <Text style={StylesListPostChoose.titleHeader}>Danh sách yêu thích</Text>
         <View style={StylesListPostChoose.Setting}>
            <Image style={StylesListPostChoose.imagesetting} source={require("../../assets/images/setting.png")} />
            <Text style={StylesListPostChoose.textSetting}>Đang phát triển ...</Text>
         </View>
      </View>
   )
}