import React from 'react'
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import { StylesSearchText } from '../../assets/styles/searchScreens'


export default function SearchText() {
   return (
      <View style={StylesSearchText.headerSearchText}>
         <TextInput style={StylesSearchText.inputSearch} placeholder="Bạn cần gì ?" />
      </View>
   )
}